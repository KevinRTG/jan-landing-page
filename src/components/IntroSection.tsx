'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import MotionBox from './MotionBox';

export default function IntroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        bgcolor: 'blue.50',
        pt: { xs: 12, sm: 16, md: 20 },
        pb: { xs: 8, sm: 10, md: 14 },
        px: { xs: 2, sm: 4, md: 6 },
        overflow: 'hidden',
      }}
    >
      {/* Lengkungan Atas */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 80,
          backgroundColor: 'background.paper',
          borderBottomLeftRadius: '50% 20%',
          borderBottomRightRadius: '50% 20%',
          zIndex: 1,
        }}
      />

      {/* Konten */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1600px',
          mx: 'auto',
        }}
      >
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            sx={{
              width: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
            }}
          >
            <Image
              src="/slide1.jpg"
              alt="Tentang Konstruksi"
              width={600}
              height={400}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </MotionBox>
        </Grid>

        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0.01, x: 50, visibility: 'hidden' }}
            whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            sx={{ maxWidth: 600 }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              color="text.primary"
              gutterBottom
              sx={{
                fontSize: {
                  xs: '1.75rem',
                  sm: '2rem',
                  md: '2.25rem',
                },
              }}
            >
              Tentang Kami
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: {
                  xs: '1rem',
                  sm: '1.125rem',
                },
              }}
            >
              CV. JAN Nusantara adalah perusahaan konstruksi yang berkomitmen menghadirkan solusi pembangunan yang berkualitas dan berkelanjutan. Kami telah dipercaya dalam berbagai proyek jalan, jembatan, dan gedung di seluruh Indonesia.
            </Typography>
          </MotionBox>
        </Grid>
      </Grid>
    </Box>
  );
}
