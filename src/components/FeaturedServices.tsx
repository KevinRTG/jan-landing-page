'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 10h18M3 14h18M5 6h14M5 18h14" />
      </svg>
    ),
    title: 'Pekerjaan Jalan Raya & Tol',
    description: 'Kami membangun dan memperbaiki infrastruktur jalan dengan standar keselamatan dan kualitas tinggi.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4zM8 8h8v8H8z" />
      </svg>
    ),
    title: 'Gedung Perkantoran & Perumahan',
    description: 'Desain dan konstruksi gedung modern yang efisien dan ramah lingkungan.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M2 12h20M4 12v6h4v-6M16 12v6h4v-6" />
      </svg>
    ),
    title: 'Jembatan & Struktur Besar',
    description: 'Konstruksi jembatan dan struktur berat dengan teknologi dan rekayasa terbaik.',
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Layanan Unggulan Kami
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
