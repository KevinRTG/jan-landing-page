'use client';

import { Box, BoxProps } from '@mui/material';
import { motion, MotionProps } from 'framer-motion';
import { forwardRef } from 'react';

type MotionBoxProps = BoxProps & MotionProps;

const MotionBox = forwardRef<HTMLDivElement, MotionBoxProps>((props, ref) => (
  <Box ref={ref} component={motion.div as any} {...props} />
));

MotionBox.displayName = 'MotionBox';

export default MotionBox;
