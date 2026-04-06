import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#0c7528',
        'brand-dark-green': '#085e1f',
        'brand-white': '#ffffff',
        'brand-black': '#000000',
      },
      fontFamily: {
        gothic: ['"Gothic Regular"', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'sm': '390px',
        'md': '810px',
        'lg': '1200px',
      },
      keyframes: {
        slideX: {
          '0%': { transform: 'translateX(300px)' },
          '100%': { transform: 'translateX(-200px)' },
        },
      },
      animation: {
        slideX: 'slideX 8s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
