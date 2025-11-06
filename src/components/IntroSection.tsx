'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-[400px]"
        >
          <Image
            src="/slide1.jpg"
            alt="Tentang Konstruksi"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </motion.div>

        {/* Konten */}
        <motion.div
          initial={{ opacity: 0.01, x: 50, visibility: 'hidden' }}
          whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-[300px] flex flex-col justify-center will-change-transform"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
          <p className="text-gray-600 text-lg mb-6">
            CV. JAN Nusantara adalah perusahaan konstruksi yang berkomitmen menghadirkan solusi pembangunan yang berkualitas dan berkelanjutan. Kami telah dipercaya dalam berbagai proyek jalan, jembatan, dan gedung di seluruh Indonesia.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
