'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  FaChevronDown,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [portfolioMobileOpen, setPortfolioMobileOpen] = useState(false);
  const [language, setLanguage] = useState<'id' | 'en'>('id');
  const pathname = usePathname();
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (portfolioRef.current && !portfolioRef.current.contains(event.target as Node)) {
        setPortfolioOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '/', label: language === 'id' ? 'Beranda' : 'Home' },
    { href: '/about', label: language === 'id' ? 'Tentang Kami' : 'About Us' },
    { href: '/layanan', label: language === 'id' ? 'Layanan' : 'Services' },
    {
      href: '#',
      label: language === 'id' ? 'Portofolio' : 'Portfolio',
      sub: [
        { href: '/portfolio/projects', label: language === 'id' ? 'Proyek' : 'Projects' },
        { href: '/portfolio/lokasi-project', label: language === 'id' ? 'Lokasi Proyek' : 'Project Locations' },
      ],
    },
    { href: '/contact', label: language === 'id' ? 'Kontak' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* TopBar */}
      <div className="bg-gray-900 text-gray-100 text-sm">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center py-2 gap-2 md:gap-0">
          <div className="flex space-x-4 items-center">
            <Link href="#" className="hover:text-blue-400"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-blue-400"><FaTwitter /></Link>
            <Link href="#" className="hover:text-blue-400"><FaLinkedin /></Link>
            <Link href="#" className="hover:text-blue-400"><FaInstagram /></Link>
          </div>
          <div className="flex space-x-4 items-center text-center md:text-right">
            <span>Call: <a href="tel:+628123455555" className="hover:text-blue-400">+62 812-3455-5555</a></span>
            <div className="flex items-center space-x-2">
              <span>{language === 'id' ? 'Bahasa:' : 'Language:'}</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'id' | 'en')}
                className="bg-gray-800 text-white text-sm px-2 py-1 rounded hover:bg-gray-700"
              >
                <option value="id">Indonesia</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="block w-[180px] h-[60px] relative">
              <Image
                src="/logo-jan1.png"
                alt="JAN Nusantara Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 items-center">
              {navLinks.map(({ href, label, sub }) => (
                <div
                  key={href}
                  className="relative"
                  ref={label === (language === 'id' ? 'Portofolio' : 'Portfolio') ? portfolioRef : undefined}
                >
                  {sub ? (
                    <>
                      <button
                        tabIndex={0}
                        onClick={() => setPortfolioOpen(!portfolioOpen)}
                        className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                          pathname.startsWith('/portfolio')
                            ? 'bg-yellow-500 text-white'
                            : 'text-gray-800 hover:bg-yellow-100'
                        }`}
                      >
                        {label}
                        <FaChevronDown
                          className={`text-xs mt-[2px] transition-transform duration-300 ${
                            portfolioOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {portfolioOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                          <div className="py-2">
                            {sub.map(({ href, label }) => (
                              <Link
                                key={href}
                                href={href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition"
                              >
                                {label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                        pathname === href
                          ? 'bg-yellow-500 text-white'
                          : 'text-gray-800 hover:bg-yellow-100'
                      }`}
                    >
                      {label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Toggle */}
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
            {navLinks.map(({ href, label, sub }) => (
              <div key={href}>
                {sub ? (
                  <>
                    <button
                      onClick={() => setPortfolioMobileOpen(!portfolioMobileOpen)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition ${
                        pathname.startsWith('/portfolio')
                          ? 'bg-yellow-500 text-white'
                          : 'text-gray-800 hover:bg-yellow-100'
                      }`}
                    >
                      <span>{label}</span>
                      <FaChevronDown
                        className={`text-xs transition-transform duration-300 ${
                          portfolioMobileOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {portfolioMobileOpen && (
                      <div className="pl-4 space-y-1 mt-1">
                        {sub.map(({ href, label }) => (
                          <Link
                            key={href}
                            href={href}
                            className="block text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => {
                              setIsOpen(false);
                              setPortfolioMobileOpen(false);
                            }}
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={href}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition ${
                      pathname === href
                        ? 'bg-yellow-500 text-white'
                        : 'text-gray-800 hover:bg-yellow-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
