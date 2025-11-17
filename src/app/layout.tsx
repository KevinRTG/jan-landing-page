import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOSInitializer from '@/components/AOSInitializer';
import ThemeWrapper from '@/components/ThemeWrapper';
import ScrollToTop from '@/components/ScrollToTop'; 
import ScrollHash from '@/components/ScrollHash';

// Inisialisasi font Google (Inter dan Poppins) dengan subset Latin
const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

/**
 * Metadata global untuk aplikasi Next.js.
 * Digunakan oleh Next.js untuk SEO, integrasi sosial, dan verifikasi Google.
 */
export const metadata: Metadata = {
  title: 'JAN Nusantara', // Judul default halaman
  description: 'Solusi konstruksi dan pengadaan terpercaya dari JAN Nusantara.', // Deskripsi untuk SEO
  keywords: [
    'JAN Nusantara',
    'konstruksi',
    'pengadaan',
    'telekomunikasi',
    'furniture laboratorium',
  ], // Kata kunci untuk SEO
  other: {
    'google-site-verification': 'qesU1wefPe8EnnbllPM-i7k-wXIs_Fn0DAnG2H65BhQ', // Token verifikasi Google
  },
};

/**
 * RootLayout adalah layout utama aplikasi Next.js.
 * 
 * - Membungkus seluruh halaman dengan struktur HTML standar.
 * - Menyediakan font global (Inter & Poppins).
 * - Menyertakan komponen global seperti:
 *   - ThemeWrapper → pengaturan tema (dark/light mode).
 *   - ScrollToTop → tombol untuk kembali ke atas halaman.
 *   - ScrollHash → mendukung navigasi anchor/hash pada halaman.
 *   - AOSInitializer → inisialisasi animasi scroll (AOS).
 *   - Navbar → navigasi utama.
 *   - Footer → bagian bawah halaman.
 * - `children` adalah konten halaman yang akan dirender di dalam `<main>`.
 * 
 * @param {React.ReactNode} children - Konten halaman yang dimasukkan ke dalam layout.
 * @returns {JSX.Element} Struktur HTML lengkap dengan komponen global.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Body menggunakan font Inter dan Poppins */}
      <body className={`${inter.className} ${poppins.className}`}>
        <ThemeWrapper>
          {/* Tombol kembali ke atas */}
          <ScrollToTop />
          {/* Mendukung navigasi hash (#section) */}
          <ScrollHash /> 
          {/* Inisialisasi animasi scroll */}
          <AOSInitializer />
          {/* Navigasi utama */}
          <Navbar />
          {/* Konten halaman */}
          <main>{children}</main>
          {/* Footer global */}
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
