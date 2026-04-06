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
          black: '#1c1c1c',
          white: '#ffffff',
          silver: '#999999',
          navy: '#111111',
          emerald: '#2d6a4f',
          'emerald-dark': '#1b4332',
          'dark-surface': '#222222',
          'dark-card': '#171717',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
      },
      screens: {
        sm: '390px',
        md: '810px',
        lg: '1200px',
      },
    },
  },
  plugins: [],
};
export default config;
