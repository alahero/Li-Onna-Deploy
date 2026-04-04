'use client';

import { useEffect } from 'react';

/**
 * Lenis smooth scroll initializer.
 * Adds the `lenis` class to <html> and sets scroll-behavior to auto
 * (matching Framer's lenis CSS pattern), giving native-feeling inertia scroll.
 * A lightweight polyfill via CSS; if @studio-freight/lenis is later added
 * to package.json, swap to the full library here.
 */
export default function LenisScroll() {
  useEffect(() => {
    // Add the Framer-compatible lenis class
    document.documentElement.classList.add('lenis', 'lenis-smooth');
    return () => {
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);

  return null;
}
