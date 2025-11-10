'use client';

import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function IntroSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 8, sm: 10, md: 14 },
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: '1600px',
        mx: 'auto',
        overflow: 'hidden',
      }}
    >
      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
        {/* Gambar */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4 / 3',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
              }}
            >
              <Image
                src="/slide1.jpg"
                alt="Tentang Konstruksi"
                fill
                  
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Box>
          </motion.div>
        </Grid>

        {/* Konten */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0.01, x: 50, visibility: 'hidden' }}
            whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box sx={{ maxWidth: 600 }}>
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
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
