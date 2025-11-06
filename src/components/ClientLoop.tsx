'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';

const clients = [
  { name: 'pln', logo: '/pln.png' },
  { name: 'hermina', logo: '/hermina.png' },
  { name: 'outsourcing', logo: '/outsourcing.png' },
  { name: 'general-contractor', logo: '/general-contractor.png' },
  { name: 'indonetwork', logo: '/indonetwork.png' },
  { name: 'Pertamina', logo: '/pertamina.png' },
  { name: 'manpowergroup', logo: '/manpowergroup.png' },
];

export default function ClientLoop() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Klien Kami</h2>

      <div className="logo-loop-container">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 w-16 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 h-full bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Logo track */}
        <div className="logo-loop-track flex gap-4 animate-scroll">
          {duplicatedClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="relative w-[200px] h-[100px] flex items-center justify-center shrink-0 fade-in"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
                sizes="(max-width: 768px) 100px, 140px"
              />
            </div>
          ))}
        </div>

        {/* Parallax section */}
        <div className="relative z-0 h-[300px] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/slide2.png')] bg-cover bg-center parallax" />
        </div>
      </div>
    </section>
  );
}
