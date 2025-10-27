'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import ProductCard from './ProductCard';
import Image from 'next/image';
import { Product } from '@/types/product'; // pastikan path sesuai

export default function CatalogClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) setError(error.message);
      else {
        // pastikan id dikonversi ke string jika perlu
        const normalized = (data || []).map((item) => ({
          ...item,
          id: String(item.id),
        }));
        setProducts(normalized);
      }
    };
    fetchProducts();
  }, []);

  if (error) return <div className="text-center text-red-600 py-10">Error: {error}</div>;
  if (products.length === 0) return <div className="text-center text-gray-600 py-10">No products available.</div>;

  return (
    <>
      {/* Banner Judul */}
      <div className="relative w-full h-[200px] md:h-[300px]">
        <Image
          src="/slide3.jpg"
          alt="Catalog Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Katalog Produk</h1>
        </div>
      </div>

      {/* Konten Katalog */}
      <section className="py-20 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
