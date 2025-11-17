'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * @file ScrollToTop.tsx
 * @description Komponen utilitas untuk mengatur scroll halaman kembali ke atas
 * setiap kali route/path berubah di aplikasi Next.js.
 * 
 * - Menggunakan hook `usePathname` dari Next.js untuk mendeteksi perubahan path.
 * - Setiap kali `pathname` berubah, `window.scrollTo` dipanggil untuk mengembalikan
 *   posisi scroll ke atas halaman dengan animasi smooth.
 * - Tidak merender elemen visual apapun (`return null`), hanya menjalankan efek samping.
 * 
 * @returns {null} Tidak ada output visual, hanya efek samping scroll reset.
 * 
 * @example
 * ```tsx
 * // Biasanya digunakan di RootLayout agar berlaku global
 * <ScrollToTop />
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll ke atas setiap kali route berubah
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // Tidak merender UI, hanya efek samping
  return null;
}
