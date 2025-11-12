'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (pathname === '/' && hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // beri waktu mount
      }
    }
  }, [pathname]);

  return null;
}
