import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import FeaturedServices from '../components/FeaturedServices';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <IntroSection />
      <FeaturedServices />
      
    </div>
  );
}