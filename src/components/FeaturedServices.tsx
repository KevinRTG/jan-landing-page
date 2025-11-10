'use client';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ui/ServiceCard';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import RoadIcon from '@mui/icons-material/AltRoute';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BridgeIcon from '@mui/icons-material/AccountTree';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const services = [
  {
    icon: <RoadIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Pekerjaan Jalan Raya & Tol',
    description: 'Kami membangun dan memperbaiki infrastruktur jalan dengan standar keselamatan dan kualitas tinggi.',
  },
  {
    icon: <ApartmentIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Gedung Perkantoran & Perumahan',
    description: 'Desain dan konstruksi gedung perkantoran dan rumah tinggal yang aman dan ramah lingkungan.',
  },
  {
    icon: <BridgeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Jembatan & Struktur Besar',
    description: 'Konstruksi jembatan dan struktur besar yang kokoh dan tahan lama.',
  },
  {
    icon: <ManageAccountsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Manajemen Proyek & Konsultasi',
    description: 'Perencanaan teknis dan manajerial untuk proyek konstruksi besar dan kompleks.',
  },
];

export default function FeaturedServices() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free',
    renderMode: 'precision',
    slides: {
      perView: 'auto',
      spacing: 16,
    },
  });

  return (
      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 10, md: 20 },
          px: { xs: 2, md: 8 },
          width: '100%',
          background: 'linear-gradient(to bottom, #1E3A8A, #3B82F6)',
          color: '#fff',
          overflow: 'hidden',
        }}
      >

      {/* Gelombang SVG di atas */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: { xs: 80, md: 150 },
          zIndex: 1,
          lineHeight: 0,
        }}
      >

        <svg
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <path
            fill="#fff"
            d="M0,0 C480,80 960,0 1440,60 L1440,0 L0,0 Z"
          />
        </svg>
      </Box>


      {/* Konten */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
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
          Layanan Unggulan Kami
        </Typography>

        {isMobile ? (
          <Box
            ref={sliderRef}
            className="keen-slider"
            sx={{
              display: 'flex',
              width: '100%',
              minHeight: 220,
            }}
          >
            {services.map((service, index) => (
              <Box
                className="keen-slider__slide"
                key={index}
                sx={{
                  scrollSnapAlign: 'start',
                  width: 220,
                  flex: '0 0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              </Box>
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(auto-fit, minmax(300px, 1fr))',
              },
              gap: { xs: 3, md: 5 },
              width: '100%',
              minHeight: 400,
            }}
          >

            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
