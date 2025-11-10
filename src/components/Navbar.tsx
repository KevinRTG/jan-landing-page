'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'visimisi', href: '#visimisi' },
        { id: 'viewallproduct', href: '#viewallproduct' },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100 && top >= -300) {
            setActiveSection(section.href);
            return;
          }
        }
      }

      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '#visimisi', label: 'Visi Misi' },
    { href: '#viewallproduct', label: 'Produk Kami' },
    { href: '/layanan', label: 'Layanan' },
    { href: '/contact', label: 'Kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-md font-roboto">
      <nav className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-[50px] h-[50px]">
              <Image
                src="/logo-jan1.png"
                alt="JAN Nusantara Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-black drop-shadow-md text-lg font-bold">
              CV. JAN NUSANTARA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center text-sm">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 transition ${
                  activeSection === href || (activeSection === '' && pathname === href)
                    ? 'font-bold border-b-2 border-black text-black'
                    : 'font-normal text-gray-800 hover:text-gray-500'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="px-3 pt-2 pb-4 space-y-2 bg-white text-black">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-3 py-2 rounded-md text-sm transition ${
                  activeSection === href || (activeSection === '' && pathname === href)
                    ? 'font-bold border-b-2 border-black'
                    : 'font-normal hover:text-yellow-500'
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
