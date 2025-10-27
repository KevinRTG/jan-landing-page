'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Tentang Kami */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Tentang Kami</h3>
            <p className="text-sm mb-4">
              PT. Sumber Mas Konstruksi Tbk, didirikan pada tanggal 04 Februari 1981. Kami bergerak di bidang Perdagangan dan Jasa Konstruksi Umum (Pembangunan jalan, jembatan, gedung, dan perumahan).
            </p>
            <div className="flex space-x-4 text-xl text-gray-400">
              <a href="#" className="hover:text-white">FB</a>
              <a href="#" className="hover:text-white">TW</a>
              <a href="#" className="hover:text-white">IG</a>
              <a href="#" className="hover:text-white">YT</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400">Tentang Kami</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Layanan Kami</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Kontak</Link></li>
            </ul>
          </div>

          {/* Website */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-white">Website</h4>
            <p className="text-sm mb-4">www.konstruksico.id</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Cari..."
                className="w-full px-3 py-2 rounded-l bg-gray-800 text-sm text-white placeholder-gray-400"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r text-sm text-white hover:bg-blue-700">
                Go!
              </button>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-white">Kontak Kami</h4>
            <ul className="text-sm space-y-2">
              <li>Telepon: <span className="text-white">+62 21-829-5095</span></li>
              <li>Email: <a href="mailto:info@konstruksico.id" className="hover:text-blue-400">info@konstruksico.id</a></li>
              <li>Alamat: Jakarta Selatan, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          All Rights Reserved. &copy; {new Date().getFullYear()}, PT. KonstruksiCo
        </div>
      </div>
    </footer>
  );
}
