'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-800 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Siap Membangun Bersama JAN Nusantara?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
        >
          Hubungi kami sekarang untuk konsultasi proyek Anda. Kami siap memberikan solusi konstruksi yang andal, efisien, dan berkelanjutan.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded shadow-lg transition"
          >
            Hubungi Kami
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
