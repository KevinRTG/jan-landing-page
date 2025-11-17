'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * @file Hero.tsx
 * @description Komponen Hero untuk halaman utama CV. JAN Nusantara.
 * 
 * - Menampilkan logo perusahaan, heading utama, deskripsi singkat, garis pemisah, dan informasi kontak.
 * - Menggunakan **Framer Motion** untuk animasi fade-in dan slide pada heading serta deskripsi.
 * - Styling berbasis Tailwind CSS dengan background gradient dan efek shadow.
 * - Konten Hero berfungsi sebagai pengenalan singkat perusahaan kepada pengunjung.
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      
      {/* Logo Perusahaan */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logo-jan1.png"
          alt="Logo CV. JAN Nusantara"
          width={170}
          height={170}
          className="rounded-full object-contain"
        />
      </div>

      {/* Heading Utama dengan animasi fade-up */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }} // mulai transparan & bergeser ke atas
        animate={{ opacity: 1, y: 0 }}   // animasi masuk ke posisi normal
        transition={{ duration: 1 }}     // durasi animasi 1 detik
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg"
      >
        Welcome to CV. JAN Nusantara
      </motion.h1>

      {/* Deskripsi perusahaan dengan animasi fade-in */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }} // delay 0.3s agar muncul setelah heading
        className="max-w-3xl mx-auto text-[0.75rem] sm:text-sm md:text-base text-gray-200 drop-shadow-sm mb-6 leading-relaxed"
      >
        CV. JAN Nusantara berdiri sejak tahun 2016, dirintis untuk menawarkan jasa konstruksi 
        dan perbaikan infrastruktur seperti jalan raya, jembatan, dan gedung. 
        Dengan pengalaman lebih dari sepuluh tahun, kami berkomitmen memberikan kualitas terbaik 
        dan waktu pengerjaan yang efisien. Tim kami terus berkembang dan siap menjadi solusi terbaik 
        untuk kebutuhan konstruksi Anda.
      </motion.p>

      {/* Garis Pemisah */}
      <div className="w-[100px] h-[2px] bg-gray-400 mx-auto mb-8 opacity-60" />

      {/* Informasi Kontak */}
      <div className="text-[0.75rem] sm:text-sm text-gray-300 space-y-2 max-w-3xl mx-auto leading-relaxed">
        <p>
          Alamat: JALAN INSPEKSI KALIMALANG, 17520, KAMPUNG JL. CIKEDOKAN,<br />
          Desa/Kelurahan Sukadanau, Kec. Cikarang Barat, Kab. Bekasi,<br />
          Provinsi Jawa Barat, 17530, Indonesia
        </p>
        <p>
          Telepon:{' '}
          <a
            href="tel:+6281311189274"
            className="text-white underline hover:text-gray-400 transition"
          >
            0813-1118-9274
          </a>
        </p>
        <p>
          Email:{' '}
          <a
            href="mailto:JANNusantaraGroup@gmail.com"
            className="text-white underline hover:text-gray-400 transition break-all"
          >
            JANNusantaraGroup@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
