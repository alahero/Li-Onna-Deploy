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
          black: '#111111',
          charcoal: '#2D2D2D',
          crimson: '#9B2335',
          'crimson-light': '#BF2D42',
          gold: '#C8A97E',
          'gold-light': '#DEC49A',
          cream: '#F5F0E1',
          'cream-dark': '#E8E0C8',
          white: '#FAFAFA',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        japanese: ['var(--font-japanese)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #C8A97E 0%, #DEC49A 50%, #C8A97E 100%)',
        'gradient-dark': 'linear-gradient(180deg, #111111 0%, #2D2D2D 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(17,17,17,0.3) 0%, rgba(17,17,17,0.7) 60%, rgba(17,17,17,0.95) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-up-delay': 'slideUp 0.8s ease-out 0.2s both',
        'fade-in-slow': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
