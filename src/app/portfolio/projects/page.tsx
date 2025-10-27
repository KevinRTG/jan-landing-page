'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Project = {
  id: number;
  title: string;
  year: number;
  image: string;
};

const allProjects: Project[] = [
  { id: 1, title: 'Jembatan Paket Riau', year: 2018, image: '/jembatan.jpg' },
  { id: 2, title: 'Gedung DPRD Sumut', year: 2019, image: '/dprd.jpg' },
  { id: 3, title: 'Perumahan Kuala Tanjung', year: 2020, image: '/perumahan.jpg' },
  { id: 4, title: 'Menara BTS Greenfield', year: 2020, image: '/bts.jpg' },
  { id: 5, title: 'Interior Masjid Istiqlal', year: 2019, image: '/masjid.jpg' },
];

export default function PortfolioProjectsPage() {
  const [yearFilter, setYearFilter] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const filteredProjects = yearFilter
    ? allProjects.filter((p) => p.year === yearFilter)
    : allProjects;

  return (
    <main className="bg-white text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[200px] md:h-[300px]">
        <Image
          src="/portfolio-banner.jpg"
          alt="Banner Portofolio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Proyek Unggulan</h1>
        </div>
      </div>

      {/* Filter */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {[2018, 2019, 2020].map((year) => (
            <button
              key={year}
              onClick={() => setYearFilter(yearFilter === year ? null : year)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                yearFilter === year
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Galeri Proyek */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              data-aos="fade-up"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800">{project.title}</h3>
                <p className="text-sm text-gray-600">Tahun: {project.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
