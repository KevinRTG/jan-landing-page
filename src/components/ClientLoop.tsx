'use client';

import Image from 'next/image';
import { Box, Typography } from '@mui/material';

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
  const duplicatedClients = [...clients, ...clients];

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
          className="logo-loop-track"
          sx={{
            display: 'flex',
            gap: 4,
            animation: 'scroll 30s linear infinite',
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          }}
        >
          {duplicatedClients.map((client, i) => (
            <Box
              key={`${client.name}-${i}`}
              sx={{
                position: 'relative',
                width: 200,
                height: 100,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
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
