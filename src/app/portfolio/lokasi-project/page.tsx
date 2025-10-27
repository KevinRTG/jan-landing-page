'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LokasiProjectPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="bg-white text-gray-800">
      {/* Banner Judul */}
      <div className="relative w-full h-[200px] md:h-[300px]">
        <Image
          src="/portfoliobanner.jpg" // Ganti dengan path gambar kamu
          alt="Lokasi Proyek"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Lokasi Proyek</h1>
        </div>
      </div>

      {/* Konten Lokasi */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Jawa Barat</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Perumahan Kuala Tanjung – Cikarang</li>
            <li>Drive Test BTS – Bekasi Selatan</li>
            <li>Interior Kantor KCP Bank Sumut – Bandung</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Sumatera Utara</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Gedung DPRD Sumut – Medan</li>
            <li>Puskesmas & Kantor Pemerintah – Tanjung Morawa</li>
            <li>Jembatan Paket Riau – Riau</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">DKI Jakarta</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Interior Masjid Istiqlal – Jakarta Pusat</li>
            <li>Grapari Telkomsel – Jakarta Selatan</li>
            <li>Instalasi BTS Greenfield – Jakarta Timur</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Bali</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Renovasi Hotel Astana – Denpasar</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
