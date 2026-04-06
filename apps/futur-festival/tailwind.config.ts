import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#224366',
          white: '#ffffff',
          muted: '#888888',
          orange: '#ff8000',
          peach: '#ffb973',
          link: '#0099ff',
        },
      },
      fontFamily: {
        display: ['"NT Dapper Bold"', '"NT Dapper Bold Placeholder"', 'sans-serif'],
        body: ['var(--font-inter, "Inter")', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
