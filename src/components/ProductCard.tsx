import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
  price: string;
}

/**
 * @file ProductCard.tsx
 * @description Komponen kartu produk untuk menampilkan detail produk.
 * 
 * - Menampilkan **gambar, nama, deskripsi, dan harga produk**.
 * - Menggunakan Next.js `Image` untuk optimasi gambar (lazy loading, responsive).
 * - Mendukung **fallback** jika data produk tidak tersedia:
 *   - Gambar → `/placeholder-image.jpg`.
 *   - Nama → `"Nama Produk"`.
 *   - Deskripsi → `"Deskripsi tidak tersedia"`.
 *   - Harga → `"Harga tidak tersedia"`.
 * - Styling berbasis Tailwind CSS:
 *   - `shadow-lg` → bayangan card.
 *   - `rounded-lg` → sudut membulat.
 *   - `overflow-hidden` → memastikan gambar tidak keluar dari card.
 *   - `p-4` → padding konten.
 * 
 * @param {Product} product - Objek produk berisi `id`, `name`, `description`, `image_url`, dan `price`.
 * @returns {JSX.Element} Kartu produk dengan detail lengkap.
 * 
 * @example
 * ```tsx
 * <ProductCard product={{
 *   id: "1",
 *   name: "Meja Laboratorium",
 *   description: "Meja khusus untuk kebutuhan laboratorium.",
 *   image_url: "/images/meja.jpg",
 *   price: "1500000"
 * }} />
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export default function ProductCard({ product }: { product: Product }) {
  // Jika data produk belum tersedia → tampilkan loading
  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Gambar produk dengan fallback */}
      <Image 
        src={product.image_url || '/placeholder-image.jpg'}
        alt={product.name || 'Product'} 
        width={300} 
        height={200} 
        className="w-full h-48 object-cover" 
      />

      {/* Konten produk */}
      <div className="p-4">
        {/* Nama produk */}
        <h3 className="text-xl font-semibold">
          {product.name || 'Nama Produk'}
        </h3>

        {/* Deskripsi produk */}
        <p className="text-gray-600">
          {product.description || 'Deskripsi tidak tersedia'}
        </p>

        {/* Harga produk */}
        <p className="text-purple-600 font-bold">
          Rp {product.price || 'Harga tidak tersedia'}
        </p>
      </div>
    </div>
  );
}
