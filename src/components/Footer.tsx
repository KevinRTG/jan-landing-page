'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { findKeywordPath } from '@/lib/keywordSearch';

export default function Footer() {
  const [query, setQuery] = useState('');
  const router = useRouter();

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
    <footer className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Logo */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Tentang Kami */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tentang Kami</h3>
            <p className="text-sm mb-4">
              CV. JAN Nusantara adalah penyedia jasa General Contractor berbasis di Bekasi, melayani pengadaan, eksekusi, dan maintenance proyek konstruksi. Kami berkomitmen menghadirkan solusi berkualitas, efisien, dan berkelanjutan untuk kebutuhan skala besar maupun mikro.
            </p>
            <div className="flex space-x-4 text-xl text-gray-300">
              <a href="#" className="hover:text-yellow-300" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="hover:text-yellow-300" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="hover:text-yellow-300" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="hover:text-yellow-300" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-yellow-300">Beranda</Link></li>
              <li><Link href="/about" className="hover:text-yellow-300">Tentang Kami</Link></li>
              <li><Link href="/services" className="hover:text-yellow-300">Layanan Kami</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-300">Kontak</Link></li>
            </ul>
          </div>

          {/* Website */}
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
                className="w-full px-3 py-2 rounded-l bg-gray-800 text-sm text-white placeholder-gray-400"
              />
              <button
                onClick={handleSearch}
                className="bg-yellow-500 px-4 py-2 rounded-r text-sm text-white hover:bg-yellow-600"
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
                  className="text-white hover:text-yellow-300 break-all block sm:inline"
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
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-blue-500 pt-6 text-center text-xs text-gray-300">
          All Rights Reserved. &copy; {new Date().getFullYear()}. PT. JanusLab.IDC
        </div>
      </div>
    </footer>
  );
}
