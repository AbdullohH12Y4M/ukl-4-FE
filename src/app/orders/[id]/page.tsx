'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ordersApi } from '@/lib/api';
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS, formatPrice, extractErrorMessage } from '@/lib/utils';
import type { Order, OrderItem } from '@/types';

export default function OrderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const { data: session } = useSession();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [note, setNote] = useState('');

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        const res = await ordersApi.getById(id);
        if (!mounted) return;
        setOrder(res.data as Order);
        setError('');
      } catch (err: any) {
        if (!mounted) return;
        setError(extractErrorMessage(err));
        setOrder(null);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [id]);

  const handleUpload = async (file: File) => {
    const uploadNote = note.trim() ? note.trim() : undefined;
    try {
      setUploading(true);
      await ordersApi.uploadProof(id, file, uploadNote);
      const res = await ordersApi.getById(id);
      setOrder(res.data as Order);
      setNote('');
    } catch (err: any) {
      setError(extractErrorMessage(err));
    } finally {
      setUploading(false);
    }
  };

  if (!session) {
    return (
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Detail Pesanan</h1>
          <p>Silakan login untuk melihat pesanan Anda.</p>
          <Link href="/login" className="btn btn-primary">Masuk</Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container" style={{ padding: '40px 0' }}>
        <p>Memuat detail pesanan...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Pesanan tidak ditemukan</h1>
          <p className="form-error">{error || 'Pesanan tidak dapat dimuat.'}</p>
          <Link href="/orders" className="btn btn-primary">Kembali ke Riwayat Pesanan</Link>
        </div>
      </div>
    );
  }

  const canUploadProof = order.status === 'PENDING';

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div style={{ marginBottom: 24 }}>
        <Link href="/orders" className="btn btn-ghost btn-sm">← Kembali ke Riwayat Pesanan</Link>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <p className="text-muted">Pesanan #{order.id}</p>
          <h1>{ORDER_STATUS_LABELS[order.status] ?? order.status}</h1>
        </div>
        <span className={`badge ${ORDER_STATUS_COLORS[order.status]}`}>{order.status}</span>
      </div>

      <div style={{ display: 'grid', gap: 24 }}>
        <section className="card" style={{ padding: 24 }}>
          <h2>Informasi Pengiriman</h2>
          <p><strong>Tipe:</strong> {order.shippingType}</p>
          <p><strong>Lokasi:</strong> {order.shippingAddress || order.shippingDistrict || 'Pengambilan'}</p>
          <p><strong>Total:</strong> {formatPrice(order.totalPrice)}</p>
          <p><strong>Tanggal:</strong> {new Date(order.createdAt).toLocaleDateString('id-ID')}</p>
          <p><strong>Metode Bayar:</strong> {order.paymentMethod}</p>
          {order.notes && <p><strong>Catatan:</strong> {order.notes}</p>}
        </section>

        <section className="card" style={{ padding: 24 }}>
          <h2>Item Pesanan</h2>
          {order.items.map((item: OrderItem) => (
            <div key={item.id} style={{ borderBottom: '1px solid var(--color-border)', padding: '12px 0' }}>
              <p className="font-medium">{item.sku.product.name}</p>
              <p className="text-muted">{item.sku.color} • {item.sku.size}</p>
              <p>Rp{item.priceAtPurchase.toLocaleString('id-ID')} x {item.quantity}</p>
              <p><strong>Subtotal</strong> {formatPrice(item.priceAtPurchase * item.quantity)}</p>
            </div>
          ))}
        </section>

        {canUploadProof && (
          <section className="card" style={{ padding: 24 }}>
            <h2>Bukti Pembayaran</h2>
            {order.paymentProofUrl ? (
              <div>
                <p className="font-medium">Bukti Transfer</p>
                <a href={order.paymentProofUrl} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">Lihat Bukti</a>
              </div>
            ) : (
              <>
                <label className="btn btn-primary btn-sm" htmlFor={`proof-${order.id}`}>
                  {uploading ? 'Mengunggah...' : 'Unggah Bukti Transfer'}
                  <input
                    id={`proof-${order.id}`}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) handleUpload(file);
                    }}
                  />
                </label>
                <div style={{ marginTop: 10 }}>
                  <label className="form-label" htmlFor={`note-${order.id}`}>Catatan Tambahan (Opsional)</label>
                  <textarea
                    id={`note-${order.id}`}
                    className="form-textarea form-input"
                    rows={2}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Transfer via BCA a/n Budi"
                  />
                </div>
              </>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
