import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import ClientProviders from '@/components/ClientProviders';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'JAN Nusantara',
  description: 'Solusi konstruksi dan pengadaan terpercaya dari JAN Nusantara.',
  keywords: ['JAN Nusantara', 'konstruksi', 'pengadaan', 'telekomunikasi', 'furniture laboratorium'],
  other: {
    'google-site-verification': 'qesU1wefPe8EnnbllPM-i7k-wXIs_Fn0DAnG2H65BhQ',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${poppins.className}`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
