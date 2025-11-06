'use client';

import { useEffect } from 'react';
import Hero from '../components/Hero';
import ClientLoop from '../components/ClientLoop';
import IntroSection from '../components/IntroSection';
import FeaturedServices from '../components/FeaturedServices';
import ViewAllProductsButton from '../components/ViewAllProductsButton';
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
        <ClientLoop />
      </section>

      <section data-aos="fade-up" data-aos-delay="400">
        <FeaturedServices />
      </section>

      <section data-aos="fade-up" data-aos-delay="300">
        <IntroSection />
      </section>

      <section data-aos="fade-up" data-aos-delay="400">
        <ViewAllProductsButton />
      </section>

    </div>
  );
}
