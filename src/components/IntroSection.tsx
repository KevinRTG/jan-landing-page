'use client';

import Image from 'next/image';
import MotionBox from './MotionBox';

export default function IntroSection() {
  return (
    <section className="relative bg-blue-50 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-14 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Lengkungan Atas */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white rounded-b-[50%_20%] z-[1]" />

      {/* Konten */}
      <div className="relative z-[2] max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src="/slide1.jpg"
            alt="Tentang Konstruksi"
            width={600}
            height={400}
            loading="lazy"
            className="w-full h-auto object-cover rounded-lg"
          />
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0.01, x: 50, visibility: 'hidden' }}
          whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[600px]"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang Kami
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            CV. JAN Nusantara adalah perusahaan konstruksi yang berkomitmen menghadirkan solusi pembangunan yang berkualitas dan berkelanjutan. Kami telah dipercaya dalam berbagai proyek jalan, jembatan, dan gedung di seluruh Indonesia.
          </p>
        </MotionBox>
      </div>
    </section>
  );
}
