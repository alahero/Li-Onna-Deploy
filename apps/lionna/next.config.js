/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mg/keystatic-config', '@mg/ui-primitives', '@mg/shared-utils'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'framerusercontent.com' },
    ],
    /** Evita pedir variantes 3840px; el LCP (hero) no exige ancho 4K. */
    deviceSizes: [640, 750, 828, 1080, 1200, 1280, 1920, 2560],
    formats: ['image/avif', 'image/webp'],
  },
};
module.exports = nextConfig;
