'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import MotionBox from './MotionBox';

/**
 * @file IntroSection.tsx
 * @description Komponen IntroSection untuk menampilkan **Visi dan Misi** CV. JAN Nusantara.
 * 
 * - Menggunakan komponen `MotionBox` (wrapper Framer Motion) untuk animasi fade-in dan slide.
 * - Struktur utama:
 *   1. **Visi** → ditampilkan di sisi kiri dengan animasi masuk dari kiri.
 *   2. **Misi** → ditampilkan di sisi kanan dengan animasi masuk dari kanan.
 * - Layout responsif:
 *   - Mobile → konten ditampilkan dalam satu kolom.
 *   - Desktop → konten ditampilkan dalam dua kolom dengan garis pemisah di tengah.
 * - Styling berbasis Tailwind CSS dengan kombinasi grid, spacing, dan efek shadow.
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */

export default function IntroSection() {
  return (
    <section
      id="visimisi"
      className="relative bg-white mt-25 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24"
    >
      {/* Kontainer utama dengan grid 2 kolom (desktop) */}
      <div
        className="relative z-[2] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-center md:text-left 
        before:hidden md:before:block before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-0.5 before:bg-gray-500"
      >
        {/* Bagian Visi dengan animasi masuk dari kiri */}
        <MotionBox
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-black drop-shadow-md">Visi</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed drop-shadow-sm">
            Menciptakan solusi konstruksi yang inovatif, berkualitas tinggi, dan berdampak positif bagi pembangunan nasional.
          </p>
        </MotionBox>

        {/* Bagian Misi dengan animasi masuk dari kanan */}
        <MotionBox
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 pt-8 md:pt-0 md:pl-8"
        >
          <h3 className="text-2xl font-bold text-black drop-shadow-md">Misi</h3>
          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed drop-shadow-sm">
            <p>
              Memberikan layanan konstruksi yang andal, inovatif, dan berkelanjutan dengan mengutamakan kualitas,
              efisiensi, serta integritas dalam setiap proyek.
            </p>
          </ul>
        </MotionBox>
      </div>
    </section>
  );
}
