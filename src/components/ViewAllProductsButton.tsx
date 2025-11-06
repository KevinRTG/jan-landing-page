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
    <section className="py-16 bg-white">
      <h2 className="text-3xl text-black font-bold text-center mb-12" data-aos="fade-up">
        Produk Kami
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16">
        {/* Produk 1 */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6" data-aos="fade-up">
          <div className="relative w-full aspect-video mb-4">
            <Image
              src="/kontraktor.jpg"
              alt="EMS Dashboard"
              fill
              className="rounded-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h3 className="text-xl text-black font-semibold mb-2">EMS (Energy Monitoring System)</h3>
          <p className="text-gray-700 mb-4">
            Solusi pemantauan dan manajemen energi untuk efisiensi operasional. Pantau, analisis, dan kendalikan konsumsi energi secara real-time.
          </p>
        </div>

        {/* Produk 2 */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="100">
          <div className="relative w-full aspect-video mb-4">
            <Image
              src="/alatkesehatan.jpg"
              alt="Smart PJU App"
              fill
              className="rounded-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h3 className="text-xl text-black font-semibold mb-2">Smart PJU (Penerangan Jalan Umum)</h3>
          <p className="text-gray-700 mb-4">
            Sistem manajemen lampu jalan berbasis mobile. Integrasi kontrol dan monitoring PJU dengan aplikasi dan PIN untuk efisiensi dan keamanan.
          </p>
        </div>
      </div>

      {/* Tombol CTA */}
      <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="200">
        <ButtonPrimary
          href="/catalog"
          endIcon={<FaArrowRight className="text-sm" />}
        >
          Lihat Semua Produk
        </ButtonPrimary>
      </div>
    </section>
  );
}
