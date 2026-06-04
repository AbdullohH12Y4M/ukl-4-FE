'use client';

import { useCallback, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { productsApi, categoriesApi } from '@/lib/api';
import { formatPrice, extractErrorMessage } from '@/lib/utils';
import type { Product, ProductSKU, Category } from '@/types';
import styles from './page.module.css';

export default function AdminProductEditPage() {
  const params = useParams<{ id: string }>();
  const productId = params.id;
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    basePrice: '',
    imageUrl: '',
    isActive: true,
    categoryId: '',
  });

  const fetchProduct = useCallback(async () => {
    if (!productId) return;
    try {
      setLoading(true);
      const [prodRes, catRes] = await Promise.all([
        productsApi.getAll(),
        categoriesApi.listAll(),
      ]);

      const allProducts = (Array.isArray(prodRes.data) ? prodRes.data : Array.isArray(prodRes.data?.items) ? prodRes.data.items : Array.isArray(prodRes.data?.products) ? prodRes.data.products : []) as Product[];
      const found = allProducts.find((p) => p.id === productId) || null;

      if (found) {
        setProduct(found);
        setFormData({
          name: found.name,
          description: found.description,
          basePrice: String(found.basePrice),
          imageUrl: (found.images && found.images[0]) || '',
          isActive: true,
          categoryId: (found as any).categoryId || (found as any).category?.id || '',
        });
      } else {
        setError('Produk tidak ditemukan.');
        setProduct(null);
      }
      setCategories((catRes.data as Category[]) || []);
      setError('');
    } catch (err: unknown) {
      setError(extractErrorMessage(err));
      setProduct(null);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productId) return;
    setSaving(true);
    setError('');
    setSuccess('');
    try {
      await productsApi.updateProduct(productId, {
        ...formData,
        basePrice: Number(formData.basePrice),
      });
      setSuccess('Produk berhasil diperbarui.');
    } catch (err: unknown) {
      setError(extractErrorMessage(err));
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.productEdit} style={{ padding: '24px', textAlign: 'center' }}>
        <p>Memuat data produk...</p>
      </div>
    );
  }

  if (error && !product) {
    return (
      <div className={styles.productEdit} style={{ padding: '24px', textAlign: 'center' }}>
        <p className="form-error">{error}</p>
        <button className="btn btn-primary" onClick={() => router.push('/admin/products')} style={{ marginTop: '16px' }}>Kembali</button>
      </div>
    );
  }

  return (
    <div className={styles.productEdit}>
      <div style={{ marginBottom: '24px' }}>
        <button className="btn btn-ghost btn-sm" onClick={() => router.push('/admin/products')}>← Kembali ke Daftar Produk</button>
      </div>

      <div className="card" style={{ padding: '32px', maxWidth: '800px' }}>
        <h2>Edit Produk</h2>
        {product && (
          <p className="text-muted" style={{ marginBottom: '24px' }}>
            ID: {product.id} • Slug: {product.slug} • {product.skus?.length || 0} varian
          </p>
        )}

        {success && <p className="form-text hint text-success" style={{ marginBottom: '16px' }}>{success}</p>}
        {error && <p className="form-error" style={{ marginBottom: '16px' }}>{error}</p>}

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '18px' }}>
          <div>
            <label className="form-label">Nama Produk *</label>
            <input
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Contoh: Nike Air Force 1"
              required
            />
          </div>

          <div>
            <label className="form-label">Deskripsi *</label>
            <textarea
              className="form-textarea form-input"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Deskripsi produk"
              rows={3}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label className="form-label">Harga Dasar *</label>
              <input
                type="number"
                className="form-input"
                value={formData.basePrice}
                onChange={(e) => setFormData({ ...formData, basePrice: e.target.value })}
                placeholder="Contoh: 1500000"
                required
              />
            </div>
            <div>
              <label className="form-label">Kategori</label>
              <select
                className="form-select"
                value={formData.categoryId}
                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
              >
                <option value="">-- Pilih Kategori --</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="form-label">URL Gambar Utama</label>
            <input
              className="form-input"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              placeholder="https://..."
            />
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Preview"
                style={{ width: '80px', height: '80px', objectFit: 'cover', marginTop: '8px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
              />
            )}
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <input
              id="isActive"
              type="checkbox"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
            />
            <label htmlFor="isActive" className="form-label" style={{ margin: 0 }}>Produk Aktif</label>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => router.push('/admin/products')}>Batal</button>
          </div>
        </form>

        {product && product.skus && product.skus.length > 0 && (
          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--color-border)' }}>
            <h3>Varian SKU ({product.skus.length})</h3>
            <div style={{ overflowX: 'auto', marginTop: '16px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--color-surface-2)', borderBottom: '1px solid var(--color-border)' }}>
                    <th style={{ padding: '12px', fontWeight: 600 }}>Warna</th>
                    <th style={{ padding: '12px', fontWeight: 600 }}>Ukuran</th>
                    <th style={{ padding: '12px', fontWeight: 600 }}>Stok</th>
                    <th style={{ padding: '12px', fontWeight: 600 }}>Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {product.skus.map((sku: ProductSKU) => (
                    <tr key={sku.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: sku.colorHex || '#888',
                            border: '1px solid var(--color-border)',
                          }} />
                          {sku.color}
                        </div>
                      </td>
                      <td style={{ padding: '12px' }}>{sku.size}</td>
                      <td style={{ padding: '12px' }}>
                        <span className={`badge ${sku.stock > 0 ? 'badge-success' : 'badge-danger'}`}>{sku.stock}</span>
                      </td>
                      <td style={{ padding: '12px' }}>{formatPrice(sku.price || product.basePrice)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
