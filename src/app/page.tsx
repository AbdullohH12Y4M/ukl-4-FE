'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductCard from '@/components/shop/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { useShopStore } from '@/store/shop';
import styles from './page.module.css';

// 1. PINDAHKAN LOGIKA UTAMA KE DALAM KOMPONEN TERPISAH
function ShopContent() {
  const router = useRouter();
  const params = useSearchParams();

  // Memanggil displayProducts dari Zustand store yang aman dari looping
  const { displayProducts, isLoading, error, fetchProducts } = useShopStore();

  const category = params.get('category') ?? '';
  const color = params.get('color') ?? '';
  const size = params.get('size') ?? '';
  const minPrice = params.get('minPrice') ?? '';
  const maxPrice = params.get('maxPrice') ?? '';
  const search = params.get('search') ?? '';

  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  // Melakukan fetch ulang hanya jika string filter berubah
  useEffect(() => {
    const filters = {
      category,
      color,
      size,
      minPrice,
      maxPrice,
      search,
    };

    fetchProducts(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, color, size, minPrice, maxPrice, search]);

  return (
    <div className={styles.heroPage}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.heroBadge}>SneakerLocal</span>
          <h1 className={styles.heroTitle}>Sepatu lokal Malang, varian warna dan ukuran lengkap.</h1>
          <p className={styles.heroText}>
            Jelajahi katalog sepatu untuk mahasiswa: sneakers, kasual, formal, dan sandal dengan filter harga, ukuran, warna, dan stok tersedia.
          </p>
          <div className={styles.heroActions}>
            <form
              className={styles.heroSearch}
              onSubmit={(event) => {
                event.preventDefault();
                const query = new URLSearchParams(params.toString());
                if (searchInput.trim()) {
                  query.set('search', searchInput.trim());
                } else {
                  query.delete('search');
                }
                router.push(`/?${query.toString()}`);
              }}
            >
              <input
                type="search"
                placeholder="Cari produk, warna, atau ukuran"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                className="form-input"
              />
              <button type="submit" className="btn btn-primary btn-lg">
                Cari
              </button>
            </form>
            <Link href="/cart" className="btn btn-primary btn-lg">
              Buka Keranjang
            </Link>
            <Link href="/?category=sandal" className="btn btn-secondary btn-lg">
              Lihat Sandal
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroCard}>
            <h2>Flat ongkir Malang Raya</h2>
            <p>Rp10.000 untuk Lowokwaru, Klojen, Blimbing, Sukun, Kedungkandang.</p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionLabel}>Katalog Produk</p>
            <h2 className={styles.sectionTitle}>Temukan sepatu sesuai kantong mahasiswa</h2>
          </div>
          <p className={styles.sectionMeta}>
            Menampilkan <strong>{isLoading ? '...' : displayProducts.length}</strong> produk aktif.
          </p>
        </div>

        <div className={styles.shopGrid}>
          <div className={styles.sidebarWrapper}>
            <FilterSidebar />
          </div>
          <div className={styles.productGrid}>
            {isLoading ? (
              <div className={styles.emptyState}>
                <p className="text-muted">Mengambil data dari server...</p>
              </div>
            ) : error ? (
              <div className={styles.emptyState}>
                <p className="text-danger">{error}</p>
              </div>
            ) : displayProducts.length ? (
              displayProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))
            ) : (
              <div className={styles.emptyState}>
                <p className="text-muted">Tidak ada produk aktif yang sesuai kriteria filter Anda.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// 2. WAJIB DIEXPORT MENGGUNAKAN SUSPENSE WRAPPER AGAR NEXT.JS ROOT LAYOUT TIDAK CRASH
export default function HomePage() {
  return (
    <Suspense 
      fallback={
        <div style={{ padding: '4rem', textAlign: 'center', color: '#888' }}>
          <p>Memuat Sistem Toko SneakerLocal...</p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}