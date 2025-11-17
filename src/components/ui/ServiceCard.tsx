'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import { Box, Card, CardContent, Typography } from '@mui/material';

/**
 * @file ServiceCard.tsx
 * @description Komponen kartu layanan (Service Card) berbasis Material UI.
 * 
 * - Digunakan untuk menampilkan informasi singkat tentang layanan atau fitur.
 * - Struktur utama:
 *   1. **Icon** → ditampilkan di bagian atas kartu.
 *   2. **Title** → judul layanan dengan gaya tebal.
 *   3. **Description** → deskripsi singkat layanan.
 * - Styling berbasis MUI `Card` dengan properti tambahan:
 *   - Elevation (shadow).
 *   - Border radius besar (rounded).
 *   - Border abu-abu agar terlihat jelas.
 *   - Layout fleksibel dengan `flexbox`.
 * - Mendukung responsivitas dengan padding berbeda untuk `xs` dan `sm`.
 * 
 * @param {React.ReactNode} icon - Ikon layanan (misalnya dari `react-icons` atau MUI Icons).
 * @param {string} title - Judul layanan.
 * @param {string} description - Deskripsi singkat layanan.
 * @returns {JSX.Element} Kartu layanan dengan ikon, judul, dan deskripsi.
 * 
 * @example
 * ```tsx
 * <ServiceCard
 *   icon={<SomeIcon fontSize="large" color="primary" />}
 *   title="Konstruksi Jalan"
 *   description="Layanan pembangunan dan perbaikan jalan dengan kualitas terbaik."
 * />
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card
      elevation={2}
      sx={{
        p: { xs: 2, sm: 3 },
        textAlign: 'center',
        borderRadius: 5,
        height: '100%',
        minHeight: 50,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid', // ⬅️ pastikan border terlihat
        borderColor: 'grey.300',
      }}
    >
      <CardContent>
        {/* Ikon layanan */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
          {icon}
        </Box>

        {/* Judul layanan */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        {/* Deskripsi layanan */}
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
