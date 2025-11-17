'use client'; 
// Directive Next.js untuk menandakan bahwa file ini dijalankan di sisi client (bukan server).

import { useEffect } from 'react';
import Hero from '../components/Hero';
import ClientLoop from '../components/ClientLoop';
import IntroSection from '../components/IntroSection';
import FeaturedServices from '../components/FeaturedServices';
import ViewAllProductsButton from '../components/ViewAllProductsButton';
import CtaSection from '@/components/CtaSection';
import WhatsAppShortcut from '@/components/WhatsAppShortcut';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Komponen utama halaman Home.
 * 
 * - Menginisialisasi AOS (Animate On Scroll) untuk animasi scroll.
 * - Menyusun layout halaman dengan beberapa section:
 *   1. Hero (bagian pembuka)
 *   2. IntroSection (pengantar konten)
 *   3. ClientLoop (logo/klien yang ditampilkan looping)
 *   4. FeaturedServices (layanan unggulan)
 *   5. ViewAllProductsButton (tombol navigasi ke semua produk)
 *   6. CtaSection (call-to-action)
 *   7. WhatsAppShortcut (shortcut komunikasi via WhatsApp)
 * 
 * @returns {JSX.Element} Struktur halaman utama dengan animasi scroll.
 */
export default function Home() {
  useEffect(() => {
    // Inisialisasi AOS dengan durasi animasi 800ms dan hanya sekali per elemen.
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Bagian Hero dengan animasi fade-up */}
      <section data-aos="fade-up">
        <Hero />
      </section>

      {/* Bagian Intro dengan delay animasi 100ms */}
      <section data-aos="fade-up" data-aos-delay="100">
        <IntroSection />
      </section>

      {/* Looping logo klien dengan delay animasi 200ms */}
      <section data-aos="fade-up" data-aos-delay="200">
        <ClientLoop />
      </section>

      {/* Layanan unggulan dengan delay animasi 300ms */}
      <section data-aos="fade-up" data-aos-delay="300">
        <FeaturedServices />
      </section>

      {/* Tombol untuk melihat semua produk dengan delay animasi 400ms */}
      <section data-aos="fade-up" data-aos-delay="400">
        <ViewAllProductsButton />
      </section>

      {/* Call-to-action section dengan delay animasi 500ms */}
      <section data-aos="fade-up" data-aos-delay="500">
        <CtaSection />
      </section>
      
      {/* Shortcut WhatsApp tanpa animasi scroll */}
      <WhatsAppShortcut />
    </div>
  );
}
