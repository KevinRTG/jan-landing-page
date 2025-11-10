'use client';

import { Box, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const MotionBox = forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box ref={ref} component={motion.div} {...props} />
));

MotionBox.displayName = 'MotionBox';

export default MotionBox;
