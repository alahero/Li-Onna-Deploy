/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mg/keystatic-config', '@mg/ui-primitives', '@mg/shared-utils'],
  images: { domains: [] },
};
module.exports = nextConfig;
