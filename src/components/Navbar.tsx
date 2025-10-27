'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang Kami' },
    { href: '/catalog', label: 'Katalog' },
    { href: '/testimonials', label: 'Testimoni' },
    { href: '/terms', label: 'Syarat & Ketentuan' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* TopBar */}
      <div className="bg-gray-900 text-gray-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center py-2 gap-2 md:gap-0">
          {/* Kiri: Media Sosial */}
          <div className="flex space-x-4 items-center">
            <Link href="#" className="hover:text-blue-400"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-blue-400"><FaTwitter /></Link>
            <Link href="#" className="hover:text-blue-400"><FaLinkedin /></Link>
            <Link href="#" className="hover:text-blue-400"><FaInstagram /></Link>
          </div>

          {/* Kanan: Kontak & Bahasa */}
          <div className="flex space-x-4 items-center text-center md:text-right">
            <span>Call: <a href="tel:+628123455555" className="hover:text-blue-400">+62 812-3455-5555</a></span>
            <span>Bahasa: <span className="text-blue-400">Indonesia</span></span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-yellow-500 hover:text-yellow-800 transition">
              CV. JAN Nusantara
            </Link>
            <div className="hidden md:flex space-x-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                    pathname === href
                      ? 'bg-yellow-500 text-white'
                      : 'text-gray-800 hover:bg-yellow-100'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="px-3 pt-2 pb-4 space-y-2 bg-white shadow-md">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition ${
                  pathname === href
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-800 hover:bg-purple-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
