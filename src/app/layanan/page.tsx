'use client';

import Image from 'next/image';
import WhatsAppShortcut from '@/components/WhatsAppShortcut';

export default function LayananPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[200px] md:h-[300px]">
        <Image
          src="/banner-services.jpg" // Ganti dengan path gambar kamu
          alt="Banner Layanan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Layanan Kami</h1>
        </div>
      </div>

      {/* Konten */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Konstruksi Umum</h2>
          <p className="text-lg leading-relaxed">
            Membangun keseluruhan bangunan yang terdiri dari bagian-bagian struktur seperti jalan raya, jembatan, pelabuhan udara dan laut, serta gedung perkantoran dan perumahan.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Desain Interior</h2>
          <p className="text-lg leading-relaxed">
            Penuangan ide dan gagasan untuk mengubah suasana bagian dalam bangunan dengan memperhatikan fungsi ruangan dan estetika, menghasilkan ruang yang hidup dan berkarakter.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Konsultan Pengawas</h2>
          <p className="text-lg leading-relaxed">
            Pengawasan pembangunan dengan penerapan manajemen mutu, metode kerja, teknis konstruksi, arsitektur, serta pengendalian waktu dan biaya demi kepuasan klien.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Konstruksi Telekomunikasi</h2>
          <p className="text-lg leading-relaxed">
            Pembangunan dan instalasi jaringan telekomunikasi seperti menara BTS, drive test optimasi jaringan, instalasi radio transmisi, dan commissioning sistem.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Proyek Unggulan</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Fasilitas Umum: Puskesmas, Kantor Pemerintah</li>
            <li>Jalan dan Jembatan: Paket Riau, Tol Kuala Tanjung</li>
            <li>Gedung Perkantoran: DPRD Sumut, Kantor PAPDI</li>
            <li>Perumahan: Kuala Tanjung 1 & 2</li>
            <li>Menara BTS: Instalasi & Sarana Penunjang</li>
          </ul>
        </div>
        
        <WhatsAppShortcut />
      </section>
    </main>
    
  );
}
