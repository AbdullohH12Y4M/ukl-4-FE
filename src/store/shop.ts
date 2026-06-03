import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import axios from 'axios';
import type { Order, OrderStatus } from '@/types';

interface ShopState {
  products: any[];
  displayProducts: any[]; // State terpisah untuk hasil filter agar tidak loop
  categories: any[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: (filters?: Record<string, any>) => Promise<void>;
}

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      products: [],
      displayProducts: [],
      categories: [],
      isLoading: false,
      error: null,

      fetchProducts: async (filters) => {
        // Mencegah trigger loading berulang jika data sudah ada (opsional, untuk performa)
        set({ isLoading: true, error: null });
        
        try {
          // FIX UTAMA: Menembak langsung endpoint /all sesuai response swagger sukses Anda
          const response = await axios.get('https://sneakerlocal.up.railway.app/all');
          
          const rawProducts = response.data?.products || [];
          const rawCategories = response.data?.categories || [];

          // Normalisasi Struktur Data agar kompatibel dengan UI FE Anda
          let normalized = rawProducts.map((product: any) => {
            const safeSkus = product.skus || [
              { id: `sku-${product.id}-40`, color: 'Hitam', size: 40, stock: 10, price: product.basePrice },
              { id: `sku-${product.id}-41`, color: 'Hitam', size: 41, stock: 5, price: product.basePrice },
            ];

            return {
              ...product,
              images: product.imageUrl && product.imageUrl !== 'string' ? [product.imageUrl] : ['/placeholder-shoes.png'],
              categoryName: product.category?.name || 'Lainnya',
              skus: safeSkus
            };
          });

          // Jalankan Filter di Sisi Client (karena endpoint /all mengembalikan semua data)
          if (filters) {
            normalized = normalized.filter((product: any) => {
              if (filters.category && product.category?.slug !== filters.category.toLowerCase()) return false;
              
              if (filters.search) {
                const term = filters.search.toLowerCase();
                const matchName = product.name?.toLowerCase().includes(term);
                const matchDesc = product.description?.toLowerCase().includes(term);
                if (!matchName && !matchDesc) return false;
              }

              if (filters.color) {
                return product.skus.some((s: any) => s.color.toLowerCase() === filters.color.toLowerCase());
              }

              if (filters.size) {
                return product.skus.some((s: any) => s.size === Number(filters.size));
              }

              if (filters.minPrice) {
                return product.skus.some((s: any) => (s.price ?? product.basePrice) >= Number(filters.minPrice));
              }

              if (filters.maxPrice) {
                return product.skus.some((s: any) => (s.price ?? product.basePrice) <= Number(filters.maxPrice));
              }

              return true;
            });
          }

          // Set data ke state. displayProducts digunakan untuk rendering di UI page.
          set({ 
            products: rawProducts, // Simpan data aslinya
            displayProducts: normalized, // Hasil filter aktif
            categories: rawCategories, 
            isLoading: false 
          });
        } catch (err: any) {
          console.error('Fetch error:', err);
          set({ error: 'Gagal mengambil data produk terbaru dari server.', isLoading: false });
        }
      },
    }),
    {
      name: 'sneakerlocal-shop',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ orders: (state as any).orders || [] }),
    }
  )
);