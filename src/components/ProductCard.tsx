import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
  price: string;
}

export default function ProductCard({ product }: { product: Product }) {
  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image 
        src={product.image_url || '/placeholder-image.jpg'}
        alt={product.name || 'Product'} 
        width={300} 
        height={200} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name || 'Nama Produk'}</h3>
        <p className="text-gray-600">{product.description || 'Deskripsi tidak tersedia'}</p>
        <p className="text-purple-600 font-bold">Rp {product.price || 'Harga tidak tersedia'}</p>
      </div>
    </div>
  );
}
