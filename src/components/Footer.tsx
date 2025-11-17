'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { findKeywordPath } from '@/lib/keywordSearch';

/**
 * @file Footer.tsx
 * @description Komponen Footer untuk aplikasi JAN Nusantara.
 * 
 * - Menampilkan logo perusahaan, navigasi cepat (Quick Links), informasi website, 
 *   form pencarian, kontak, dan ikon sosial media.
 * - Pencarian menggunakan fungsi `findKeywordPath` untuk menentukan path berdasarkan keyword.
 *   Jika tidak ditemukan, diarahkan ke halaman `/search`.
 * - Styling berbasis Tailwind CSS dengan gradient background.
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */

export default function Footer() {
  // State untuk menyimpan query pencarian
  const [query, setQuery] = useState('');
  const router = useRouter();

  /**
   * Fungsi handleSearch
   * - Membersihkan input query
   * - Mencari path berdasarkan keyword
   * - Jika ditemukan → navigasi ke path
   * - Jika tidak → navigasi ke halaman search dengan query
   */
  const handleSearch = async () => {
    const trimmed = query.trim().toLowerCase();
    const path = await findKeywordPath(trimmed);

    if (path) {
      router.push(path);
    } else {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Logo Perusahaan */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo-jan1.png"
            alt="Logo JAN Nusantara"
            width={200}
            height={60}
            className="h-auto w-auto max-w-[200px] sm:max-w-[220px] md:max-w-[240px]"
            priority
          />
        </div>

        {/* Grid Konten Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Quick Links → Navigasi cepat */}
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gray-400 transition">Beranda</Link></li>
              <li><Link href="/#visimisi" className="hover:text-gray-400 transition">Visi Misi</Link></li>
              <li><Link href="/#featuredservices" className="hover:text-gray-400 transition">Mengapa JAN?</Link></li>
              <li><Link href="/#viewallproduct" className="hover:text-gray-400 transition">Produk Kami</Link></li>
              <li><Link href="/layanan" className="hover:text-gray-400 transition">Layanan Kami</Link></li>
              <li><Link href="/contact" className="hover:text-gray-400 transition">Kontak</Link></li>
            </ul>
          </div>

          {/* Website & Pencarian */}
          <div>
            <h4 className="text-md font-semibold mb-4">Website</h4>
            <p className="text-sm mb-4">www.jannusantara.id</p>
            <label htmlFor="footer-search" className="sr-only">Cari</label>
            <div className="flex">
              <input
                id="footer-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari..."
                className="w-full px-3 py-2 rounded-l bg-gray-900 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button
                onClick={handleSearch}
                className="bg-black px-4 py-2 rounded-r text-sm text-white hover:bg-gray-700 transition"
              >
                Go!
              </button>
            </div>
          </div>

          {/* Kontak Kami */}
          <div>
            <h4 className="text-md font-semibold mb-4">Kontak Kami</h4>
            <ul className="text-sm space-y-2">
              <li>
                <span className="block sm:inline">Telepon:</span>{' '}
                <span className="block sm:inline text-white">0813-1118-9274 / 0895-1689-8093</span>
              </li>
              <li>
                <span className="block sm:inline">Email:</span>{' '}
                <a
                  href="mailto:JANNusantaraGroup@gmail.com"
                  className="text-white hover:text-gray-300 break-all block sm:inline"
                >
                  JANNusantaraGroup@gmail.com
                </a>
              </li>
              <li>
                <span className="block sm:inline">Alamat:</span>{' '}
                <span className="block sm:inline text-white">
                  Jl. Inspeksi Kalimalang, Kampung Cikedokan<br />
                  Desa Sukadanau, Kec. Cikarang Barat<br />
                  Kab. Bekasi, Jawa Barat 17530
                </span>
              </li>
            </ul>

            {/* Ikon Sosial Media */}
            <div className="flex space-x-4 mt-6 text-xl text-gray-400">
              <a href="#" className="hover:text-blue-500 transition" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400 transition" aria-label="Twitter"><FaTwitter /></a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-[#dc2743] transition duration-300"
              >
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-red-800 transition" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom → Hak cipta */}
        <div className="mt-12 border-t border-gray-600 pt-6 text-center text-xs text-gray-400">
          All Rights Reserved. &copy; {new Date().getFullYear()}. CV. JAN NUSANTARA
        </div>
      </div>
    </footer>
  );
}
