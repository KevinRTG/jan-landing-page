'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

interface Product {
  id: number;
  name: string;
  description: string;
  image_url: string;
  price: number;
}

interface ProductForm {
  name: string;
  description: string;
  image_url: string;
  price: string;
}

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<ProductForm>({
    name: '',
    description: '',
    image_url: '',
    price: '',
  });
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) router.push('/admin-portal-xyz/login');
    };
    checkAuth();
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await supabase.from('products').select('*');
    setProducts(data || []);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(filePath, file);

    if (uploadError) {
      alert('Gagal upload gambar: ' + uploadError.message);
      return;
    }

    const { data: publicUrl } = supabase.storage
      .from('product-images')
      .getPublicUrl(filePath);

    setFormData((prev) => ({ ...prev, image_url: publicUrl.publicUrl }));
  };

  const handleAddProduct = async () => {
    const priceValue = parseFloat(formData.price);
    if (isNaN(priceValue)) {
      alert('Harga harus berupa angka');
      return;
    }

    const { error } = await supabase.from('products').insert([{
      name: formData.name,
      description: formData.description,
      image_url: formData.image_url,
      price: priceValue,
    }]);

    if (error) {
      console.error('Insert error:', error);
      alert('Gagal menyimpan: ' + error.message);
      return;
    }

    setFormData({ name: '', description: '', image_url: '', price: '' });
    setShowForm(false);
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) fetchProducts();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin-portal-xyz/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-between items-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">📦 Katalog Produk</h1>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setShowForm(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition text-sm sm:text-base"
            >
              + Tambah Produk
            </button>
            <button
              onClick={handleLogout}
              className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 transition text-sm sm:text-base"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              {p.image_url && (
                <img src={p.image_url} alt={p.name} className="w-full h-48 object-cover rounded mb-4" />
              )}
              <h2 className="text-lg sm:text-xl font-semibold text-black mb-2">{p.name}</h2>
              <p className="text-sm sm:text-base text-black mb-2">{p.description}</p>
              <p className="text-purple-600 font-semibold mb-4 text-sm sm:text-base">
                Rp {p.price.toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(p.id)}
                className="text-sm text-red-500 hover:underline"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 overflow-y-auto">
            <div className="bg-white p-6 rounded-lg text-black shadow-lg w-full max-w-md mx-4 my-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Tambah Produk</h2>
              <input
                type="text"
                placeholder="Nama produk"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full mb-4 px-4 py-2 border border-black rounded-md focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Deskripsi produk"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full mb-4 px-4 py-2 border border-black rounded-md focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full mb-4 px-4 py-2 border border-black rounded-md"
              />
              {formData.image_url && (
                <img src={formData.image_url} alt="Preview" className="w-full h-40 object-cover rounded mb-4" />
              )}
              <input
                type="number"
                placeholder="Harga (Rp)"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full mb-4 px-4 py-2 border border-black rounded-md focus:ring-2 focus:ring-purple-500"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600 hover:underline"
                >
                  Batal
                </button>
                <button
                  onClick={handleAddProduct}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
