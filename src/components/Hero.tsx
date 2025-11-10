'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logo-jan1.png"
          alt="Logo CV. JAN Nusantara"
          width={170}
          height={170}
          className="rounded-full object-contain"
        />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg"
      >
        Welcome to CV. JAN Nusantara
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-3xl mx-auto text-[0.75rem] sm:text-sm md:text-base text-gray-200 drop-shadow-sm mb-6 leading-relaxed"
      >
        CV. JAN Nusantara berdiri sejak tahun 2016, dirintis untuk menawarkan jasa konstruksi dan perbaikan infrastruktur seperti jalan raya, jembatan, dan gedung. Dengan pengalaman lebih dari sepuluh tahun, kami berkomitmen memberikan kualitas terbaik dan waktu pengerjaan yang efisien. Tim kami terus berkembang dan siap menjadi solusi terbaik untuk kebutuhan konstruksi Anda.
      </motion.p>

      {/* Garis Pemisah */}
      <div className="w-[100px] h-[2px] bg-gray-400 mx-auto mb-8 opacity-60" />

      {/* Kontak */}
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
