'use client';

import Image from 'next/image';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRef, useState, useEffect } from 'react';

const clients = [
  { name: 'pln', logo: '/pln.png' },
  { name: 'hermina', logo: '/hermina.png' },
  { name: 'outsourcing', logo: '/outsourcing.png' },
  { name: 'general-contractor', logo: '/general-contractor.png' },
  { name: 'indonetwork', logo: '/indonetwork.png' },
  { name: 'Pertamina', logo: '/pertamina.png' },
  { name: 'manpowergroup', logo: '/manpowergroup.png' },
];

export default function ClientLoop() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const logos = isDesktop ? clients : [...clients, ...clients];

  // Auto-scroll only on mobile
  useEffect(() => {
    if (isDesktop) return;

    let frameId: number;
    const step = () => {
      if (scrollRef.current && !isPaused && !isDragging) {
        scrollRef.current.scrollLeft += 0.5;
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

  // Drag-scroll
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
    const walk = (x - startX) * 1.5;
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
        {/* Fade edges */}
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

        {/* Logo track */}
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
