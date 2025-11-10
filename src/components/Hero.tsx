'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BlurText from '@/components/ui/BlurText';

const images = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg'];

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
    <section className="relative w-full overflow-hidden h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
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
        <div className="max-w-3xl">
          <BlurText
            text="Welcome to CV. JAN Nusantara"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight justify-center"
          />
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 px-2 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Perusahaan konstruksi terpercaya dengan pengalaman puluhan tahun di bidang jalan, jembatan, dan gedung.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
    