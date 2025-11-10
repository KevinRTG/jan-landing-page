'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ButtonPrimary from '@/components/ui/ButtonPrimary';

export default function ViewAllProductsButton() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="viewallproduct" className="py-20 px-4 sm:px-6 lg:px-16 bg-white text-black">
      <h2
        className="text-3xl sm:text-4xl font-bold text-center mb-16 drop-shadow-md"
        data-aos="fade-up"
      >
        Produk Kami
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Produk 1 */}
        <div
          className="bg-white/5 border border-white/10 rounded-xl shadow-lg p-6 transition hover:scale-[1.02] hover:border-white/30"
          data-aos="fade-up"
        >
          <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-md">
            <Image
              src="/kontraktor.jpg"
              alt="EMS Dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold mb-2">EMS (Energy Monitoring System)</h3>
          <p className="text-gray-700 leading-relaxed">
            Solusi pemantauan dan manajemen energi untuk efisiensi operasional. Pantau, analisis, dan kendalikan konsumsi energi secara real-time.
          </p>
        </div>

        {/* Produk 2 */}
        <div
          className="bg-white/5 border border-white/10 rounded-xl shadow-lg p-6 transition hover:scale-[1.02] hover:border-white/30"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-md">
            <Image
              src="/alatkesehatan.jpg"
              alt="Smart PJU App"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Smart PJU (Penerangan Jalan Umum)</h3>
          <p className="text-gray-700 leading-relaxed">
            Sistem manajemen lampu jalan berbasis mobile. Integrasi kontrol dan monitoring PJU dengan aplikasi dan PIN untuk efisiensi dan keamanan.
          </p>
        </div>
      </div>

      {/* Tombol CTA */}
      <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="200">
      <ButtonPrimary
        href="/catalog"
        sx={{
          backgroundColor: '#374151', // gray-700
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#1f2937', // darker gray
          },
          px: 4,
          py: 1.5,
          borderRadius: '999px',
          textTransform: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      >
        Lihat Semua Produk
      </ButtonPrimary>

      </div>
    </section>
  );
}
