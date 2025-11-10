'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-400 to-gray-700 text-white overflow-hidden">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg"
        >
          Siap Membangun Bersama JAN Nusantara?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-sm"
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
            className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
          >
            Hubungi Kami
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
