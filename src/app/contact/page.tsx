'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * @file page.tsx (ContactPage)
 * @description Halaman "Hubungi Kami" untuk CV. JAN Nusantara.
 * 
 * - Menampilkan hero section dengan judul dan deskripsi singkat.
 * - Menggunakan **AOS (Animate On Scroll)** untuk animasi fade-up pada konten.
 * - Konten utama terdiri dari beberapa section:
 *   1. **Informasi Kontak** → alamat kantor, telepon, email, jam operasional.
 *   2. **Lokasi Workshop** → alamat dan nomor telepon workshop.
 *   3. **Media Sosial** → link ke Instagram dan LinkedIn perusahaan.
 * - Styling berbasis Tailwind CSS untuk layout responsif dan tipografi.
 * - Menggunakan semantic HTML (`section`, `ul`, `li`) agar lebih terstruktur.
 * 
 * ⚠️ Catatan:
 * - Nomor telepon dan email harus sesuai dengan data resmi perusahaan.
 * - Link media sosial dapat diperbarui sesuai akun aktif.
 * 
 * @returns {JSX.Element} Halaman kontak dengan hero section dan informasi lengkap.
 * 
 * @example
 * ```tsx
 * // Routing Next.js otomatis akan menampilkan halaman ini di /contact
 * export default function ContactPage() { ... }
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export default function ContactPage() {
  useEffect(() => {
    // Inisialisasi AOS untuk animasi scroll
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 text-white text-center px-4">
        <div className="z-10">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-4">Hubungi Kami</h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto drop-shadow-sm text-gray-200">
            Kami siap melayani kebutuhan konstruksi, pengadaan, dan konsultasi proyek Anda dengan presisi dan dedikasi.
          </p>
        </div>
      </section>

      {/* Konten Kontak */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        
        {/* Informasi Kontak */}
        <div data-aos="fade-up" className="space-y-4">
          <h2 className="text-2xl font-bold text-black drop-shadow-md">Informasi Kontak</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed drop-shadow-sm">
            CV. JAN Nusantara siap melayani Anda untuk kebutuhan konstruksi, pengadaan, dan konsultasi proyek.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-base sm:text-lg leading-relaxed drop-shadow-sm">
            <li><strong>Alamat Kantor:</strong> Jl. Raya Cibitung No. 88, Bekasi - Jawa Barat</li>
            <li><strong>Telepon:</strong> <a href="tel:+628123455555" className="text-black hover:underline hover:text-gray-600 transition-colors duration-200">+62 812-3455-5555</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@jantara.co.id" className="text-black hover:underline hover:text-gray-600 transition-colors duration-200">info@jantara.co.id</a></li>
            <li><strong>Jam Operasional:</strong> Senin - Jumat, 08.00 - 17.00 WIB</li>
          </ul>
        </div>

        {/* Lokasi Workshop */}
        <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
          <h2 className="text-2xl font-bold text-black drop-shadow-md">Lokasi Workshop</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed drop-shadow-sm">
            Workshop kami berlokasi di kawasan industri strategis, siap mendukung proyek Anda dengan fasilitas lengkap dan tim profesional.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-base sm:text-lg leading-relaxed drop-shadow-sm">
            <li><strong>Alamat:</strong> Jl. Inspeksi Kalimalang, Kampung Cikedokan Desa Sukadanau, Kec. Cikarang Barat Kab. Bekasi, Jawa Barat 17530</li>
            <li><strong>Telepon Workshop:</strong> <a href="tel:+6281380096130" className="text-black hover:underline hover:text-gray-600 transition-colors duration-200">+62 813-8009-6130</a></li>
          </ul>
        </div>

        {/* Media Sosial */}
        <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
          <h2 className="text-2xl font-bold text-black drop-shadow-md">Media Sosial</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed drop-shadow-sm">
            Ikuti kami untuk update proyek terbaru, dokumentasi lapangan, dan informasi layanan:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-base sm:text-lg leading-relaxed drop-shadow-sm">
            <li><strong>Instagram:</strong> <a href="https://instagram.com/jan_nusantara" target="_blank" className="text-black hover:underline hover:text-gray-600 transition-colors duration-200">@jan_nusantara</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/company/jan-nusantara" target="_blank" className="text-black hover:underline hover:text-gray-600 transition-colors duration-200">JAN Nusantara</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
