import CatalogClient from '../../components/CatalogClient';

/**
 * @file page.tsx (CatalogPage)
 * @description Halaman "Katalog Produk" untuk CV. JAN Nusantara.
 * 
 * - Halaman ini berfungsi sebagai wrapper untuk komponen `CatalogClient`.
 * - `CatalogClient` bertanggung jawab menampilkan daftar produk, pencarian, dan interaksi katalog.
 * - Styling dasar menggunakan Tailwind CSS:
 *   - `min-h-screen` → memastikan tinggi minimum layar penuh.
 *   - `bg-white` → latar belakang putih untuk konsistensi dengan halaman lain.
 * 
 * ⚠️ Catatan:
 * - Halaman ini otomatis tersedia di route `/catalog`.
 * - Semua logika katalog (fetch data, filter, render produk) ada di dalam `CatalogClient`.
 * - Halaman ini hanya bertugas sebagai entry point untuk katalog.
 * 
 * @returns {JSX.Element} Wrapper halaman katalog dengan komponen `CatalogClient`.
 * 
 * @example
 * ```tsx
 * // Routing Next.js otomatis akan menampilkan halaman ini di /catalog
 * export default function CatalogPage() { ... }
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Komponen utama katalog */}
      <CatalogClient />
    </div>
  );
}
