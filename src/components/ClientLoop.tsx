'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import Image from 'next/image';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRef, useState, useEffect } from 'react';

// Daftar klien dengan nama dan logo
const clients = [
  { name: 'pln', logo: '/pln.png' },
  { name: 'hermina', logo: '/hermina.png' },
  { name: 'outsourcing', logo: '/outsourcing.png' },
  { name: 'general-contractor', logo: '/general-contractor.png' },
  { name: 'indonetwork', logo: '/indonetwork.png' },
  { name: 'Pertamina', logo: '/pertamina.png' },
  { name: 'manpowergroup', logo: '/manpowergroup.png' },
];

/**
 * Komponen ClientLoop.
 * 
 * - Menampilkan daftar logo klien dalam bentuk carousel horizontal.
 * - Fitur utama:
 *   1. **Auto-scroll (mobile)** → logo bergerak otomatis ke kanan.
 *   2. **Drag-scroll (desktop & mobile)** → pengguna bisa drag untuk scroll manual.
 *   3. **Pause on hover** → animasi berhenti saat kursor berada di area logo.
 *   4. **Fade-in animation** → setiap logo muncul dengan animasi bertahap.
 *   5. **Responsive** → jumlah logo digandakan di mobile agar loop terasa lebih panjang.
 * - Menggunakan Material UI (`Box`, `Typography`) untuk layout dan styling.
 * - Menggunakan Next.js `Image` untuk optimasi gambar.
 * 
 * @returns {JSX.Element} Section berisi judul "Klien Kami" dan carousel logo klien.
 */
export default function ClientLoop() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Ref untuk track scroll
  const scrollRef = useRef<HTMLDivElement>(null);

  // State untuk drag-scroll
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // State untuk pause auto-scroll
  const [isPaused, setIsPaused] = useState(false);

  // Jika mobile, gandakan daftar logo agar loop lebih panjang
  const logos = isDesktop ? clients : [...clients, ...clients];

  /**
   * Auto-scroll hanya aktif di mobile.
   * Menggunakan `requestAnimationFrame` untuk animasi halus.
   */
  useEffect(() => {
    if (isDesktop) return;

    let frameId: number;
    const step = () => {
      if (scrollRef.current && !isPaused && !isDragging) {
        scrollRef.current.scrollLeft += 0.5;
        // Reset ke awal jika sudah mencapai ujung
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused, isDragging, isDesktop]);

  // Event handler drag-scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // kecepatan drag
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 20 },
        px: { xs: 2, md: 8 },
        width: '100%',
        maxWidth: '1600px',
        mx: 'auto',
        position: 'relative',
      }}
    >
      {/* Judul section */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        color="text.primary"
        mb={{ xs: 6, md: 10 }}
        sx={{
          fontSize: {
            xs: '1.75rem',
            sm: '2rem',
            md: '2.25rem',
            lg: '2.5rem',
          },
        }}
      >
        Klien Kami
      </Typography>

      <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
        {/* Fade edges kiri-kanan */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 64,
            height: '100%',
            background: 'linear-gradient(to right, white, transparent)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 64,
            height: '100%',
            background: 'linear-gradient(to left, white, transparent)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />

        {/* Track logo klien */}
        <Box
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={() => {
            handleMouseLeave();
            setIsPaused(false);
          }}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsPaused(true)}
          sx={{
            display: 'flex',
            gap: 4,
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollBehavior: 'auto',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            paddingBottom: 2,
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {logos.map((client, i) => (
            <Box
              key={`${client.name}-${i}`}
              sx={{
                position: 'relative',
                minWidth: 200,
                height: 100,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                pointerEvents: isDragging ? 'none' : 'auto',
                animation: `fadeIn 0.6s ease ${i * 0.1}s forwards`,
                '@keyframes fadeIn': {
                  to: { opacity: 1 },
                },
              }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
                sizes="(max-width: 768px) 100px, 140px"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
