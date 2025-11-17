'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import ProductCard from './ProductCard';
import Image from 'next/image';
import { Product } from '@/types/product'; // pastikan path sesuai

/**
 * @file CatalogClient.tsx
 * @description Komponen utama untuk menampilkan katalog produk dari Supabase.
 * 
 * - Bertugas mengambil data produk dari tabel `products` di Supabase.
 * - Menggunakan React hooks:
 *   - `useState` → menyimpan daftar produk dan pesan error.
 *   - `useEffect` → melakukan fetch data saat komponen pertama kali dirender.
 * - Menampilkan:
 *   1. **Banner judul katalog** dengan gambar latar.
 *   2. **Grid produk** menggunakan komponen `ProductCard`.
 * - Handling:
 *   - Jika query gagal → tampilkan pesan error.
 *   - Jika tidak ada produk → tampilkan pesan "No products available".
 * 
 * ⚠️ Catatan:
 * - Pastikan tabel `products` di Supabase memiliki struktur sesuai dengan tipe `Product`.
 * - Normalisasi id ke string agar konsisten dengan key React.
 * - Banner menggunakan Next.js `Image` untuk optimasi gambar.
 * 
 * @returns {JSX.Element} Tampilan katalog produk dengan banner dan daftar produk.
 * 
 * @example
 * ```tsx
 * <CatalogClient />
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export default function CatalogClient() {
  // State untuk menyimpan daftar produk
  const [products, setProducts] = useState<Product[]>([]);
  // State untuk menyimpan pesan error jika query gagal
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      // Query ke tabel 'products' di Supabase
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        // Jika error, simpan pesan error
        setError(error.message);
      } else {
        // Normalisasi data: pastikan id dikonversi ke string
        const normalized = (data || []).map((item) => ({
          ...item,
          id: String(item.id),
        }));
        setProducts(normalized);
      }
    };
    fetchProducts();
  }, []);

  // Jika error, tampilkan pesan error
  if (error)
    return (
      <div className="text-center text-red-600 py-10">
        Error: {error}
      </div>
    );

  // Jika tidak ada produk, tampilkan pesan kosong
  if (products.length === 0)
    return (
      <div className="text-center text-gray-600 py-10">
        No products available.
      </div>
    );

  return (
    <>
      {/* Banner Judul Katalog */}
      <div className="relative w-full h-[200px] md:h-[300px]">
        <Image
          src="/slide3.jpg"
          alt="Catalog Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Katalog Produk
          </h1>
        </div>
      </div>

      {/* Konten Katalog Produk */}
      <section className="py-20 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
          {products.map((product) => (
            // Render setiap produk menggunakan komponen ProductCard
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
