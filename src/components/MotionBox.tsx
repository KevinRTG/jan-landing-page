'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import { Box, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';

/**
 * @file MotionBox.tsx
 * @description Komponen MotionBox adalah wrapper dari Material UI `Box` 
 * yang sudah ditambahkan kemampuan animasi menggunakan **Framer Motion**.
 * 
 * - Menggabungkan fleksibilitas layout dari MUI `Box` dengan animasi deklaratif dari Framer Motion.
 * - Mendukung semua properti `BoxProps` dari MUI.
 * - Dapat digunakan sebagai pengganti `Box` ketika ingin menambahkan animasi (fade, slide, scale, dll).
 * 
 * Contoh penggunaan:
 * ```tsx
 * <MotionBox
 *   initial={{ opacity: 0, y: -20 }}
 *   animate={{ opacity: 1, y: 0 }}
 *   transition={{ duration: 0.5 }}
 * >
 *   Konten dengan animasi
 * </MotionBox>
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */

// Membuat komponen MotionBox langsung dari motion(Box) dengan typing BoxProps
const MotionBox = motion<BoxProps>(Box);

export default MotionBox;
