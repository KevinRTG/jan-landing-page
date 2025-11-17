'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/lib/theme';

/**
 * @file ThemeWrapper.tsx
 * @description Komponen pembungkus global untuk Material UI theme.
 * 
 * - Menggunakan `ThemeProvider` dari MUI untuk menyediakan tema kustom ke seluruh aplikasi.
 * - Menyertakan `CssBaseline` untuk reset default styling agar konsisten di semua browser.
 * - Tema diambil dari file `@/lib/theme` yang berisi konfigurasi warna, typography, dan komponen MUI.
 * - Digunakan di RootLayout agar semua komponen anak (`children`) mendapatkan akses ke tema.
 * 
 * @param {React.ReactNode} children - Komponen anak yang akan dibungkus dengan tema MUI.
 * @returns {JSX.Element} Wrapper dengan `ThemeProvider` dan `CssBaseline`.
 * 
 * @example
 * ```tsx
 * // Biasanya digunakan di RootLayout
 * <ThemeWrapper>
 *   <Navbar />
 *   <MainContent />
 *   <Footer />
 * </ThemeWrapper>
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline → reset default styling */}
      <CssBaseline />
      {/* Render komponen anak dengan tema MUI */}
      {children}
    </ThemeProvider>
  );
}
