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
    icon: <RoadIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Pekerjaan Jalan Raya & Tol',
    description: 'Kami membangun dan memperbaiki infrastruktur jalan dengan standar keselamatan dan kualitas tinggi.',
  },
  {
    icon: <ApartmentIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Gedung Perkantoran & Perumahan',
    description: 'Desain dan konstruksi gedung perkantoran dan rumah tinggal yang aman dan ramah lingkungan.',
  },
  {
    icon: <BridgeIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Jembatan & Struktur Besar',
    description: 'Konstruksi jembatan dan struktur besar yang kokoh dan tahan lama.',
  },
  {
    icon: <ManageAccountsIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
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
        py: { xs: 8, md: 20 }, // ⬅️ diperpanjang
        bgcolor: 'blue.50',
        width: '100%',
        maxWidth: '1600px',
        mx: 'auto',
        px: { xs: 2, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        textAlign="center"
        color="text.primary"
        mb={{ xs: 4, md: 8 }}
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
            minHeight: 220, // ⬅️ pastikan tinggi cukup untuk border
          }}
        >
          {services.map((service, index) => (
            <Box
              className="keen-slider__slide"
              key={index}
              sx={{
                scrollSnapAlign: 'start',
                width: 200,
                height: 'auto',
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
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 5,
            width: '100%',
            maxWidth: 1300,
            px: { xs: 2, md: 6 },
            minHeight: 400, // ⬅️ pastikan tinggi cukup untuk border
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
  );
}
