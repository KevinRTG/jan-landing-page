'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');
  const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);


  useEffect(() => {
  const sectionIds = ['visimisi', 'featuredservices', 'viewallproduct'];
  const sectionElements = sectionIds
    .map((id) => {
      const el = document.getElementById(id);
      return el ? { id, el } : null;
    })
    .filter(Boolean) as { id: string; el: HTMLElement }[];

  const visibilityMap = new Map<string, number>();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visibilityMap.set(entry.target.id, entry.intersectionRatio);
      });

      // Cari section dengan rasio tertinggi
      let maxRatio = 0;
      let mostVisibleId = '';
      visibilityMap.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleId = id;
        }
      });

      if (mostVisibleId) {
        setActiveSection(`#${mostVisibleId}`);
      }
    },
    {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '0px 0px -40% 0px',
    }
  );

  sectionElements.forEach(({ el }) => observer.observe(el));

  return () => observer.disconnect();
}, []);


  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/#visimisi', label: 'Visi Misi' },
    { href: '/#featuredservices', label: 'Mengapa JAN?' },
    { href: '/#viewallproduct', label: 'Produk Kami' },
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
