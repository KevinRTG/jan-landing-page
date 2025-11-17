/**
 * @file product.ts
 * @description Definisi tipe data `Product` untuk katalog produk JAN Nusantara.
 * 
 * - Digunakan sebagai kontrak data agar konsisten di seluruh aplikasi.
 * - Dipakai di komponen seperti `CatalogClient` dan `ProductCard`.
 * - Semua field bertipe `string` agar konsisten dengan data yang diambil dari Supabase.
 * 
 * @property {string} id - ID unik produk (dikonversi ke string agar konsisten dengan React key).
 * @property {string} name - Nama produk.
 * @property {string} price - Harga produk (disimpan sebagai string agar fleksibel, bisa diformat).
 * @property {string} description - Deskripsi singkat produk.
 * @property {string} image_url - URL gambar produk.
 * 
 * ⚠️ Catatan:
 * - Pastikan tabel `products` di Supabase memiliki kolom sesuai dengan interface ini.
 * - `price` bisa diformat lebih lanjut (misalnya ke Rupiah dengan Intl.NumberFormat).
 * 
 * @example
 * ```ts
 * const sampleProduct: Product = {
 *   id: "1",
 *   name: "Meja Laboratorium",
 *   price: "1500000",
 *   description: "Meja khusus untuk kebutuhan laboratorium.",
 *   image_url: "/images/meja.jpg"
 * };
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export interface Product {
  id: string; // ubah ke string agar konsisten dengan ProductCard
  name: string;
  price: string;
  description: string;
  image_url: string;
}
