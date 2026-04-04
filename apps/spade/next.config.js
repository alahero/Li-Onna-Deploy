/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mg/keystatic-config', '@mg/ui-primitives', '@mg/shared-utils'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
    ],
  },
};
module.exports = nextConfig;
