'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * @file WhatsAppShortcut.tsx
 * @description Komponen shortcut WhatsApp berupa tombol melayang (floating button).
 * 
 * - Ditampilkan di pojok kanan bawah layar (`fixed bottom-4 right-4`).
 * - Menggunakan ikon WhatsApp dari `react-icons/fa`.
 * - Link diarahkan ke API WhatsApp (`https://wa.me/<nomor>`) untuk membuka chat langsung.
 * - Styling berbasis Tailwind CSS:
 *   - Ukuran tombol: 56px (w-14 h-14).
 *   - Warna dasar hijau (`bg-green-500`), berubah saat hover (`hover:bg-green-600`).
 *   - Bentuk bulat penuh (`rounded-full`).
 *   - Shadow dan animasi transisi halus.
 * - Aksesibilitas: menggunakan `aria-label="Chat via WhatsApp"`.
 * 
 * ⚠️ Catatan:
 * - Nomor WhatsApp harus diganti dengan nomor resmi perusahaan.
 * - Pastikan format nomor sesuai dengan standar internasional (misalnya `6281311189274` untuk Indonesia).
 * 
 * @returns {JSX.Element} Tombol melayang WhatsApp di pojok kanan bawah.
 * 
 * @example
 * ```tsx
 * <WhatsAppShortcut />
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export default function WhatsAppShortcut() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href="https://wa.me/6281311189274" // Ganti dengan nomor WhatsApp resmi
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300"
        aria-label="Chat via WhatsApp"
      >
        {/* Ikon WhatsApp */}
        <FaWhatsapp className="text-2xl" />
      </Link>
    </div>
  );
}
