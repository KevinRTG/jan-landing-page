'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * @file ScrollHash.tsx
 * @description Komponen utilitas untuk menangani navigasi hash (#id) di halaman utama.
 * 
 * - Digunakan untuk melakukan scroll otomatis ke elemen dengan id tertentu
 *   ketika URL mengandung hash (misalnya `/#visimisi`).
 * - Menggunakan hook `usePathname` dari Next.js untuk mendeteksi perubahan path.
 * - Saat path adalah `'/'` dan terdapat hash di URL:
 *   - Cari elemen dengan selector hash (`document.querySelector(hash)`).
 *   - Jika ditemukan, lakukan `scrollIntoView` dengan animasi smooth.
 *   - `setTimeout` digunakan untuk memberi jeda 100ms agar elemen sudah ter-mount sebelum scroll.
 * - Tidak merender elemen visual apapun (`return null`), hanya menjalankan efek samping.
 * 
 * @returns {null} Tidak ada output visual, hanya efek samping scroll ke hash.
 * 
 * @example
 * ```tsx
 * // Biasanya digunakan di RootLayout agar berlaku global
 * <ScrollHash />
 * 
 * // Jika user membuka URL: /#featuredservices
 * // Maka halaman akan otomatis scroll ke section dengan id="featuredservices"
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export default function ScrollHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (pathname === '/' && hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Scroll ke elemen dengan animasi smooth setelah mount
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname]);

  // Tidak merender UI, hanya efek samping
  return null;
}
