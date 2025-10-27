'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/slide1.jpg',
  '/slide2.jpg',
  '/slide3.jpg',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative h-230 w-full overflow-hidden">
      {/* Previous Image */}
      <motion.img
        key={`prev-${images[prevIndex]}`}
        src={images[prevIndex]}
        alt="Previous Slide"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Current Image */}
      <motion.img
        key={`current-${images[index]}`}
        src={images[index]}
        alt="Current Slide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-end justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            Welcome to <br/> <span className="text-blue-300">CV. JAN Nusantara</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
          >
            Perusahaan konstruksi terpercaya dengan pengalaman puluhan tahun di bidang jalan, jembatan, dan gedung.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}
