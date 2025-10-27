'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 py-16 px-0 sm:px-0 lg:px-0">
        {/* Banner Gambar */}
      <div className="w-full h-[100px] md:h-[250px] relative">
        <Image
          src="/slide2.jpg" // ganti dengan path gambar kamu
          alt="Company Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Tentang Perusahaan</h1>
        </div>
      </div>


      <div className="max-w-5xl mx-auto space-y-15 mt-15">
        {/* Profil Perusahaan */}
        <section>
          <h1 className="text-3xl font-bold mb-4 text-blue-800">Profil Perusahaan</h1>
          <p className="text-lg leading-relaxed">
            CV. JAN Nusantara (JANTARA) adalah perusahaan General Contractor yang berbasis di Bekasi, berkomitmen menghadirkan solusi konstruksi berkualitas dan berkelanjutan. Didirikan melalui pengalaman bertahun-tahun, JAN melayani kebutuhan masyarakat dari skala mikro hingga proyek besar, dengan pendekatan profesional, fleksibel, dan efisien.
          </p>
        </section>

        {/* Komitmen */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Komitmen Kami</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>Profesionalitas:</strong> Integritas kerja sebagai fondasi utama.</li>
            <li><strong>Mutu:</strong> Kualitas hasil dan kepuasan klien sebagai prioritas.</li>
            <li><strong>Efisiensi:</strong> Pengendalian waktu dan biaya secara optimal.</li>
            <li><strong>Inovasi:</strong> Teknologi dan kreativitas sesuai tuntutan zaman.</li>
            <li><strong>Kearifan Lokal:</strong> Menjaga nilai tradisional dalam setiap karya.</li>
            <li><strong>Ramah Lingkungan:</strong> Konstruksi berorientasi masa depan generasi mendatang.</li>
          </ul>
        </section>

        {/* Visi & Misi */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">Visi</h2>
            <p className="italic text-lg">
              "Menjadi berkat bagi sesama dengan membangun infrastruktur berkualitas yang mendorong pertumbuhan, saling menghargai, dan keberlanjutan."
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">Misi</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Memberikan layanan konstruksi yang andal dan inovatif</li>
              <li>Mengutamakan kualitas, efisiensi, dan integritas</li>
              <li>Mendukung pembangunan berkelanjutan</li>
              <li>Membangun kemitraan jangka panjang dengan klien</li>
            </ul>
          </div>
        </section>

        {/* Legalitas & Layanan */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Layanan & Legalitas</h2>
          <p className="text-lg leading-relaxed">
            JAN Nusantara menyediakan layanan konstruksi umum, pengadaan, dan engineering di berbagai bidang seperti perumahan, jalan, jembatan, telekomunikasi, serta instalasi dan commissioning BTS. Kami bekerja sama dengan pihak swasta nasional, pemerintah, dan BUMN.
          </p>
        </section>
      </div>
    </main>
  );
}
