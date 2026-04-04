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
          black: '#0F0F0F',
          navy: '#1B2838',
          silver: '#C0C0C0',
          'silver-light': '#D8D8D8',
          emerald: '#10B981',
          'emerald-dark': '#059669',
          white: '#F8F8F8',
          'dark-card': '#151515',
          'dark-surface': '#1A1A1A',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-silver': 'linear-gradient(135deg, #C0C0C0 0%, #D8D8D8 50%, #C0C0C0 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #059669 0%, #10B981 50%, #059669 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0F0F0F 0%, #1B2838 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'silver-glow': '0 0 24px rgba(192, 192, 192, 0.2)',
        'emerald-glow': '0 0 24px rgba(16, 185, 129, 0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.5)',
      },
      borderColor: {
        'silver-dim': 'rgba(192,192,192,0.15)',
        'silver-mid': 'rgba(192,192,192,0.3)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
export default config;
