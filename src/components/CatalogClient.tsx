'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import ProductCard from './ProductCard';

export default function CatalogClient() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) setError(error.message);
      else setProducts(data || []);
    };
    fetchProducts();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (products.length === 0) return <div>No products available.</div>;

  return (
    <div className="py-20">
      <h2 className="text-3xl text-black font-bold text-center mb-10">Katalog Produk</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
