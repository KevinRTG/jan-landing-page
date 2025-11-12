'use client';

import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const features = [
  {
    title: 'Keunggulan Kualitas & Standar Tinggi',
    description:
      'JAN Nusantara berkomitmen untuk memberikan hasil konstruksi dengan kualitas terbaik, menggunakan material unggul dan standar internasional yang dapat diandalkan untuk setiap proyek.',
  },
  {
    title: 'Inovasi & Teknologi Terbaru',
    description:
      'Kami selalu mengadopsi teknologi terbaru dan metode konstruksi inovatif untuk memastikan proyek berjalan efisien, tepat waktu, dan dengan hasil maksimal.',
  },
  {
    title: 'Pengalaman & Keahlian Profesional',
    description:
      'Dengan tim yang berkompeten dan berpengalaman di berbagai jenis proyek, kami mampu mengatasi tantangan teknis dan memastikan kesuksesan setiap proyek.',
  },
  {
    title: 'Fokus pada Keberlanjutan',
    description:
      'Kami mengutamakan konstruksi ramah lingkungan dengan mengintegrasikan prinsip keberlanjutan, efisiensi sumber daya, dan solusi yang mendukung pembangunan jangka panjang.',
  },
  {
    title: 'Komitmen terhadap Klien & Kemitraan Jangka Panjang',
    description:
      'Kami tidak hanya membangun proyek, tetapi juga membangun hubungan yang kuat dan saling menghargai dengan klien, memberikan solusi yang disesuaikan dengan kebutuhan dan visi mereka.',
  },
  {
    title: 'Ketepatan Waktu & Efisiensi Biaya',
    description:
      'JAN Nusantara mengutamakan ketepatan waktu dalam setiap proyek, serta efisiensi biaya tanpa mengorbankan kualitas, sehingga memberikan nilai terbaik bagi klien.',
  },
  {
    title: 'Reputasi Terpercaya',
    description:
      'Dengan rekam jejak yang solid dan portofolio yang terus berkembang, kami telah dipercaya oleh banyak klien untuk menyelesaikan berbagai proyek penting.',
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

  const badgeStyle = {
    display: 'inline-block',
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#ffffff',
    backgroundColor: '#111827',
    px: 1.5,
    py: 0.5,
    borderRadius: '999px',
    mb: 1,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  return (
    <Box
      component="section"
      id="featuredservices" 
      sx={{
        py: { xs: 10, md: 20 },
        px: { xs: 2, md: 8 },
        width: '100%',
        background: 'linear-gradient(to top, #000000, #374151)',
        color: '#ffffff',
      }}
    >
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
          color: '#ffffff',
          textShadow: '0 2px 4px rgba(0,0,0,0.4)',
        }}
      >
        Mengapa Harus JAN?
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
          {features.map((item, index) => (
            <Box
              className="keen-slider__slide"
              key={index}
              sx={{
                scrollSnapAlign: 'start',
                width: 280,
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
                <Card
                  variant="outlined"
                  sx={{
                    width: 280,
                    backgroundColor: '#ffffff',
                    color: '#111827',
                    border: '1px solid #d1d5db',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                      borderColor: '#111827',
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={badgeStyle}>Fitur</Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
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
          }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                variant="outlined"
                sx={{
                  backgroundColor: '#ffffff',
                  color: '#111827',
                  border: '1px solid #d1d5db',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                    borderColor: '#111827',
                  },
                }}
              >
                <CardContent>
                  <Box sx={badgeStyle}>Fitur</Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      )}
    </Box>
  );
}
