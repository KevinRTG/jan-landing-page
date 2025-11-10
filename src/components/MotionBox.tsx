'use client';

import { Box, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';

// Buat MotionBox langsung dari motion(Box) dengan typing
const MotionBox = motion<BoxProps>(Box);

export default MotionBox;
