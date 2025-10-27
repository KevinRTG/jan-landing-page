'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang Kami' },
    { href: '/catalog', label: 'Katalog' },
    { href: '/layanan', label: 'Layanan' },
    {
      href: '#',
      label: 'Portofolio',
      sub: [
        { href: '/portfolio/projects', label: 'Projects' },
        { href: '/portfolio/lokasi-project', label: 'Lokasi Project' },
      ],
    },
    { href: '/contact', label: 'Kontak' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* TopBar */}
      <div className="bg-gray-900 text-gray-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center py-2 gap-2 md:gap-0">
          <div className="flex space-x-4 items-center">
            <Link href="#" className="hover:text-blue-400"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-blue-400"><FaTwitter /></Link>
            <Link href="#" className="hover:text-blue-400"><FaLinkedin /></Link>
            <Link href="#" className="hover:text-blue-400"><FaInstagram /></Link>
          </div>
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

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 items-center">
              {navLinks.map(({ href, label, sub }) => (
                <div key={href} className="relative">
                  {label === 'Portofolio' ? (
                    <>
                      <button
                        onClick={() => setPortfolioOpen(!portfolioOpen)}
                        className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition ${
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
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
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
                {label === 'Portofolio' ? (
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
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-800 hover:bg-purple-100'
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
