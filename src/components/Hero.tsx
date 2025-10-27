'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-black mb-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Bangun Masa Depan dengan <span className="text-accent">Konstruksi Berkualitas</span>
        </motion.h1>
        <p className="text-lg text-gray-700 mb-8">Perusahaan konstruksi terpercaya dengan pengalaman puluhan tahun.</p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-800">Hubungi Kami</button>
      </div>
    </section>
  );
}