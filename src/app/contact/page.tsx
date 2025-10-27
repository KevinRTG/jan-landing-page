'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="bg-white text-gray-800">
      {/* Banner Judul */}
      <div className="relative w-full h-[200px] md:h-[300px]">
        <Image
          src="/contact-banner.jpg" // Ganti dengan path gambar kamu
          alt="Banner Kontak"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Hubungi Kami</h1>
        </div>
      </div>

      {/* Konten Kontak */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Informasi Kontak</h2>
          <p className="text-lg leading-relaxed">
            CV. JAN Nusantara siap melayani Anda untuk kebutuhan konstruksi, pengadaan, dan konsultasi proyek. Silakan hubungi kami melalui kontak berikut:
          </p>
          <ul className="mt-4 space-y-2 text-lg">
            <li><strong>Alamat Kantor:</strong> Jl. Raya Cibitung No. 88, Bekasi - Jawa Barat</li>
            <li><strong>Telepon:</strong> <a href="tel:+628123455555" className="text-blue-600 hover:underline">+62 812-3455-5555</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@jantara.co.id" className="text-blue-600 hover:underline">info@jantara.co.id</a></li>
            <li><strong>Jam Operasional:</strong> Senin - Jumat, 08.00 - 17.00 WIB</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Lokasi Workshop</h2>
          <p className="text-lg leading-relaxed">
            Workshop kami berlokasi di kawasan industri strategis, siap mendukung proyek Anda dengan fasilitas lengkap dan tim profesional.
          </p>
          <ul className="mt-4 space-y-2 text-lg">
            <li><strong>Alamat:</strong> Jl. Industri No. 12, Cikarang Barat, Bekasi</li>
            <li><strong>Telepon Workshop:</strong> <a href="tel:+6281380096130" className="text-blue-600 hover:underline">+62 813-8009-6130</a></li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Media Sosial</h2>
          <p className="text-lg leading-relaxed">
            Ikuti kami untuk update proyek terbaru, dokumentasi lapangan, dan informasi layanan:
          </p>
          <ul className="mt-4 space-y-2 text-lg">
            <li><strong>Instagram:</strong> <a href="https://instagram.com/jan_nusantara" target="_blank" className="text-blue-600 hover:underline">@jan_nusantara</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/company/jan-nusantara" target="_blank" className="text-blue-600 hover:underline">JAN Nusantara</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
