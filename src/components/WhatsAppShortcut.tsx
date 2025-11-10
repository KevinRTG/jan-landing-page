'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppShortcut() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href="https://wa.me/6281311189274 " // Ganti dengan nomor kamu
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300"
        aria-label="Chat via WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </Link>
    </div>
  );
}
