'use client'; 
// Directive Next.js: memastikan komponen ini dijalankan di sisi client (bukan server).

import { motion, Transition, Easing } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: Easing | Easing[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

/**
 * @file BlurText.tsx
 * @description Komponen teks animasi dengan efek blur dan slide berbasis Framer Motion.
 * 
 * - Memecah teks menjadi **kata** atau **huruf** sesuai prop `animateBy`.
 * - Menggunakan **IntersectionObserver** untuk memicu animasi saat teks masuk viewport.
 * - Mendukung animasi dari arah atas (`top`) atau bawah (`bottom`).
 * - Default animasi:
 *   - `animationFrom` → blur(10px), opacity 0, posisi y ±50.
 *   - `animationTo` → blur(0px), opacity 1, posisi y 0.
 * - Durasi animasi dapat dikontrol dengan `stepDuration` dan `delay`.
 * - Mendukung callback `onAnimationComplete` setelah animasi selesai.
 * - Styling tambahan dapat diberikan melalui `className`.
 * 
 * @param {string} [text] - Teks yang akan dianimasikan.
 * @param {number} [delay=500] - Delay antar elemen (ms).
 * @param {string} [className] - Class tambahan untuk styling.
 * @param {'words'|'letters'} [animateBy='words'] - Mode animasi berdasarkan kata atau huruf.
 * @param {'top'|'bottom'} [direction='top'] - Arah animasi masuk.
 * @param {number} [threshold=0.1] - Threshold IntersectionObserver.
 * @param {string} [rootMargin='0px'] - Root margin IntersectionObserver.
 * @param {Record<string,string|number>} [animationFrom] - Custom animasi awal.
 * @param {Array<Record<string,string|number>>} [animationTo] - Custom animasi akhir.
 * @param {Easing|Easing[]} [easing] - Fungsi easing animasi.
 * @param {() => void} [onAnimationComplete] - Callback setelah animasi selesai.
 * @param {number} [stepDuration=0.35] - Durasi tiap step animasi.
 * @returns {JSX.Element} Elemen paragraf dengan teks animasi blur.
 * 
 * @example
 * ```tsx
 * <BlurText 
 *   text="Selamat Datang di JAN Nusantara"
 *   animateBy="words"
 *   direction="top"
 *   delay={300}
 *   className="text-2xl font-bold text-center"
 * />
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 500,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  // Pisahkan teks menjadi kata atau huruf
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  // Observer untuk memicu animasi saat teks masuk viewport
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Default animasi awal dan akhir
  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -50 }
        : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      { filter: 'blur(5px)', opacity: 0.5, y: direction === 'top' ? 5 : -5 },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing
        };

        return (
          <motion.span
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
            style={{
              display: 'inline-block',
              willChange: 'transform, filter, opacity'
            }}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
