'use client';

import MotionBox from './MotionBox';

export default function IntroSection() {
  return (
    <section id="visimisi" className="relative bg-white mt-25 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24">

      {/* Konten */}
      <div className="relative z-[2] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-center md:text-left before:hidden md:before:block before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-0.5 before:bg-gray-500" >

        {/* Visi */}
        <MotionBox
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-black drop-shadow-md">Visi</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed drop-shadow-sm">
            Menciptakan solusi konstruksi yang inovatif, berkualitas tinggi, dan berdampak positif bagi pembangunan nasional.
          </p>
        </MotionBox>

        {/* Misi */}
        <MotionBox
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 pt-8 md:pt-0 md:pl-8"
        >
          <h3 className="text-2xl font-bold text-black drop-shadow-md">Misi</h3>
          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed drop-shadow-sm">
            <p>Memberikan layanan konstruksi yang andal, inovatif, dan berkelanjutan dengan mengutamakan kualitas, efisiensi, serta integritas dalam setiap proyek.</p>
          </ul>
        </MotionBox>
      </div>
    </section>
  );
}
