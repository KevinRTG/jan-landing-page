'use client';

import ScrollToTop from './ScrollToTop';
import ScrollHash from './ScrollHash';
import AOSInitializer from './AOSInitializer';
import Navbar from './Navbar';
import Footer from './Footer';
import ThemeWrapper from './ThemeWrapper';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeWrapper>
      <ScrollToTop />
      <ScrollHash />
      <AOSInitializer />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeWrapper>
  );
}
