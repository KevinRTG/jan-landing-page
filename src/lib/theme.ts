import { createTheme } from '@mui/material/styles';

/**
 * @file theme.ts
 * @description Konfigurasi tema Material UI (MUI) untuk aplikasi JAN Nusantara.
 * 
 * - Tema ini digunakan oleh `ThemeWrapper.tsx` untuk menyediakan styling global.
 * - Palet warna:
 *   - **Primary** → `#facc15` (kuning JAN, warna utama brand).
 *   - **Secondary** → `#1f2937` (abu gelap, warna pendukung).
 * - Tipografi:
 *   - Font utama menggunakan **Roboto, sans-serif** agar konsisten dengan brand modern.
 * 
 * ⚠️ Catatan:
 * - Tema ini dapat dikembangkan lebih lanjut dengan menambahkan konfigurasi komponen,
 *   spacing, breakpoints, atau overrides sesuai kebutuhan aplikasi.
 * - Pastikan `ThemeWrapper` membungkus seluruh aplikasi agar tema ini berlaku global.
 * 
 * @example
 * ```tsx
 * import { ThemeProvider } from '@mui/material/styles';
 * import theme from '@/lib/theme';
 * 
 * <ThemeProvider theme={theme}>
 *   <App />
 * </ThemeProvider>
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */

const theme = createTheme({
  palette: {
    primary: { main: '#facc15' }, // kuning JAN
    secondary: { main: '#1f2937' }, // abu gelap
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
