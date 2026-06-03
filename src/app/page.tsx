'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductCard from '@/components/shop/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { useShopStore } from '@/store/shop';
import styles from './page.module.css';

export default function HomePage() {
  const router = useRouter();
  const params = useSearchParams();

  // 1. Ambil state dinamis, loading, error, dan action fetch dari Zustand store baru
  const { products, isLoading, error, fetchProducts } = useShopStore();

  // Menangkap parameter filter aktif yang ada di URL browser
  const category = params.get('category') ?? '';
  const color = params.get('color') ?? '';
  const size = params.get('size') ?? '';
  const minPrice = params.get('minPrice') ?? '';
  const maxPrice = params.get('maxPrice') ?? '';
  const search = params.get('search') ?? '';

  // State lokal khusus untuk mengendalikan input ketikan di kolom pencarian Hero
  const [searchInput, setSearchInput] = useState(search);

  // Sinkronisasi kolom input jika parameter search di URL berubah dari luar
  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  // 2. PROSES FETCH BACKEND (SERVER-SIDE FILTERING):
  // Setiap kali salah satu filter di URL berubah (di-klik user), useEffect ini
  // otomatis mendeteksi lalu menembak API backend via Zustand action.
  useEffect(() => {
    const filters = {
      category,
      color,
      size: size ? Number(size) : undefined,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      search,
    };

    fetchProducts(filters);
  }, [category, color, size, minPrice, maxPrice, search, fetchProducts]);

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
            <Link href="/?category=SNEAKERS" className="btn btn-secondary btn-lg">
              Lihat Sneakers
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
            Menampilkan <strong>{isLoading ? '...' : products.length}</strong> produk dengan stok tersedia.
          </p>
        </div>

        <div className={styles.shopGrid}>
          <div className={styles.sidebarWrapper}>
            <FilterSidebar />
          </div>
          <div className={styles.productGrid}>
            {/* 3. CONDITIONAL RENDERING VISUAL STATUS */}
            {isLoading ? (
              <div className={styles.emptyState}>
                <p className="text-muted">Sedang memuat katalog langsung dari server...</p>
              </div>
            ) : error ? (
              <div className={styles.emptyState}>
                <p className="text-danger">{error}</p>
              </div>
            ) : products.length ? (
              products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))
            ) : (
              <div className={styles.emptyState}>
                <p className="text-muted">Tidak ada produk sesuai filter. Coba ubah kategori, warna, atau ukuran.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}