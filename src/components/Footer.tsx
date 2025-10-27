'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-yellow-500">KonstruksiCo</h3>
            <p className="text-sm">Solusi konstruksi digital yang profesional dan terpercaya.</p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Navigasi</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="hover:text-blue-600">Beranda</Link></li>
              <li><Link href="/catalog" className="hover:text-blue-600">Katalog</Link></li>
              <li><Link href="/about" className="hover:text-blue-600">Tentang Kami</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600">Syarat & Ketentuan</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Kontak</h4>
            <ul className="text-sm space-y-1">
              <li>Email: <a href="mailto:info@konstruksico.id" className="hover:text-purple-600">info@konstruksico.id</a></li>
              <li>WhatsApp: <a href="https://wa.me/6281234567890" className="hover:text-purple-600">+62 812-3456-7890</a></li>
              <li>Alamat: Cibitung, Jawa Barat</li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Ikuti Kami</h4>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:text-blue-600">Instagram</a>
              <a href="#" className="hover:text-blue-600">LinkedIn</a>
              <a href="#" className="hover:text-blue-600">YouTube</a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} KonstruksiCo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
