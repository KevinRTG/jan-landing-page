'use client';

import { useEffect } from 'react';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import FeaturedServices from '../components/FeaturedServices';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section data-aos="fade-up">
        <Hero />
      </section>
      <section data-aos="fade-up" data-aos-delay="100">
        <IntroSection />
      </section>
      <section data-aos="fade-up" data-aos-delay="200">
        <FeaturedServices />
      </section>
    </div>
  );
}
