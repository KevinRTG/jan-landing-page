'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Komponen AOSInitializer.
 * 
 * - Bertugas menginisialisasi library AOS (Animate On Scroll) di sisi client.
 * - AOS digunakan untuk memberikan animasi pada elemen ketika pengguna melakukan scroll.
 * - Konfigurasi default:
 *   - `duration: 800` → durasi animasi 800ms.
 *   - `once: true` → animasi hanya dijalankan sekali per elemen (tidak berulang saat scroll).
 * 
 * Catatan:
 * - Komponen ini tidak merender elemen visual apapun (return `null`).
 * - Hanya berfungsi sebagai "initializer" agar AOS aktif di seluruh aplikasi.
 * 
 * @returns {null} Tidak merender UI, hanya menjalankan efek samping (AOS.init).
 */
export default function AOSInitializer() {
  useEffect(() => {
    // Inisialisasi AOS dengan konfigurasi durasi dan sekali jalan.
    AOS.init({ duration: 800, once: true });
  }, []);

  // Tidak ada output visual, hanya efek samping.
  return null;
}
