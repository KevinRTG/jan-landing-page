'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-gray-100 text-sm py-2 px-4 flex justify-between items-center">
      {/* Kiri: Media Sosial */}
      <div className="flex space-x-4 items-center">
        <Link href="#" className="hover:text-blue-400"><FaFacebookF /></Link>
        <Link href="#" className="hover:text-blue-400"><FaTwitter /></Link>
        <Link href="#" className="hover:text-blue-400"><FaLinkedin /></Link>
        <Link href="#" className="hover:text-blue-400"><FaInstagram /></Link>
      </div>

      {/* Kanan: Kontak & Bahasa */}
      <div className="flex space-x-4 items-center">
        <span>Call: <a href="tel:+628123455555" className="hover:text-blue-400">+62 812-3455-5555</a></span>
        <span>Bahasa: <span className="text-blue-400">Indonesia</span></span>
      </div>
    </div>
  );
}
