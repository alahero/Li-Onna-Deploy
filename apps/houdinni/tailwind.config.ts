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
          black: '#0B0B0B',
          dark: '#111111',
          purple: '#2D1B69',
          'purple-light': '#3D2882',
          'purple-dark': '#1A0F40',
          gold: '#D4AF37',
          'gold-light': '#E8C84A',
          'gold-dim': '#A08828',
          burgundy: '#800020',
          'burgundy-light': '#9A0028',
          cream: '#F0E6D3',
          'cream-dim': '#C8BAA0',
          white: '#F8F4EE',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #A08828 0%, #D4AF37 50%, #E8C84A 100%)',
        'gradient-purple': 'linear-gradient(135deg, #1A0F40 0%, #2D1B69 50%, #3D2882 100%)',
        'gradient-speakeasy': 'linear-gradient(180deg, #0B0B0B 0%, #1A0F40 50%, #0B0B0B 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out',
        'fade-in-slow': 'fadeIn 2s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'flicker': 'flicker 4s infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
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
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.8' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.9' },
          '97%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'gold': '0 0 20px rgba(212, 175, 55, 0.4)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.3)',
        'purple': '0 0 20px rgba(45, 27, 105, 0.6)',
        'purple-lg': '0 0 40px rgba(45, 27, 105, 0.5)',
        'inner-dark': 'inset 0 2px 20px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
};
export default config;
