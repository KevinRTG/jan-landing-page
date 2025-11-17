'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonPrimaryProps extends ButtonProps {
  children: ReactNode;
  href?: string;
}

/**
 * @file ButtonPrimary.tsx
 * @description Komponen tombol utama (Primary Button) berbasis Material UI.
 * 
 * - Wrapper untuk `Button` dari MUI dengan dukungan navigasi menggunakan Next.js `Link`.
 * - Jika properti `href` diberikan:
 *   - Tombol akan dibungkus dengan `Link` agar berfungsi sebagai navigasi.
 * - Jika `href` tidak diberikan:
 *   - Tombol berfungsi sebagai tombol biasa (misalnya untuk aksi onClick).
 * - Mendukung semua properti `ButtonProps` dari MUI.
 * - Styling dapat dikustomisasi melalui prop `sx` atau className.
 * 
 * @param {ReactNode} children - Konten tombol (teks atau ikon).
 * @param {string} [href] - Optional. Jika diberikan, tombol akan berfungsi sebagai link navigasi.
 * @param {ButtonProps} props - Properti tambahan dari MUI `Button`.
 * @returns {JSX.Element} Tombol utama dengan dukungan navigasi.
 * 
 * @example
 * ```tsx
 * // Tombol navigasi ke halaman katalog
 * <ButtonPrimary href="/catalog" sx={{ backgroundColor: '#374151', color: '#fff' }}>
 *   Lihat Semua Produk
 * </ButtonPrimary>
 * 
 * // Tombol aksi biasa
 * <ButtonPrimary onClick={() => alert('Clicked!')} variant="contained" color="primary">
 *   Klik Saya
 * </ButtonPrimary>
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export default function ButtonPrimary({ children, href, ...props }: ButtonPrimaryProps) {
  if (href) {
    return (
      <Link href={href} passHref>
        <Button {...props}>{children}</Button>
      </Link>
    );
  }

  return <Button {...props}>{children}</Button>;
}
