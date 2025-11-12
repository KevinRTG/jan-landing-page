'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import WhatsAppShortcut from '@/components/WhatsAppShortcut';

const layanan = [
  {
    title: 'Konstruksi & Supplier',
    desc: 'Melayani pembangunan infrastruktur seperti gedung, jalan, jembatan, serta pengadaan material konstruksi dengan standar tinggi dan efisiensi biaya.',
  },
  {
    title: 'Telekomunikasi',
    desc: 'Instalasi dan pengembangan jaringan telekomunikasi seperti menara BTS, drive test, radio transmisi, dan commissioning sistem.',
  },
  {
    title: 'Software & Hardware',
    desc: 'Penyediaan perangkat lunak dan keras untuk mendukung kebutuhan operasional proyek dan sistem informasi klien.',
  },
  {
    title: 'Furniture Laboratorium',
    desc: 'Pengadaan dan pemasangan furniture khusus untuk laboratorium dengan desain fungsional dan material berkualitas.',
  },
];

export default function LayananPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 text-white text-center px-4">
        <div className="z-10">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-4">
            Layanan JAN Nusantara
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto drop-shadow-sm text-gray-200">
            Solusi konstruksi, teknologi, dan pengadaan yang andal, fleksibel, dan berkelanjutan.
          </p>
        </div>
      </section>


      {/* Konten Layanan */}
      <section id="layanan" className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        {layanan.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-black drop-shadow-md">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed drop-shadow-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}

        <WhatsAppShortcut />
      </section>
    </main>
  );
}
