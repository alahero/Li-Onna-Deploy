import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lionna: {
          blue: '#005BFF',
          'blue-alt': '#005CFE',
          'blue-light': '#005DFD',
          'page-bg': '#F7F8F3',
          'section-bg': '#F6F6F2',
          'gradient-start': '#F6F4F0',
          'light-gray': '#E3E3E3',
          'medium-gray': '#8C8C8C',
          'dark-navy': '#00102E',
          'light-blue': '#D4EBFF',
          'blue-30': 'rgba(0,91,255,0.3)',
        },
      },
      fontFamily: {
        odesta: ['Odesta', 'serif'],
        editorial: ['EditorialNew', 'serif'],
      },
      fontSize: {
        'hero-desktop': ['84px', { letterSpacing: '0.02em' }],
        'hero-tablet': ['44px', { letterSpacing: '0.02em' }],
        'section-title': ['50px', { letterSpacing: '0.02em' }],
        'nav-link': ['13px', { letterSpacing: '0.04em' }],
        'dish-ticker': ['22px', { letterSpacing: '-0.04em', lineHeight: '1.4em' }],
        'body-section': ['16px', { letterSpacing: '0.02em', lineHeight: '1.2em' }],
        'section-h2': ['60px', { letterSpacing: '-0.04em', lineHeight: '1.4em' }],
        'section-h3': ['34px', { letterSpacing: '0.01em', lineHeight: '1.2em' }],
      },
      height: {
        'nav': '60px',
        'logo-area': '80px',
      },
      maxWidth: {
        'lionna': '1440px',
      },
      zIndex: {
        'nav': '4',
        'hero': '1',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        spin: 'spin 12s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      backgroundImage: {
        'hero-mask': 'linear-gradient(#000 63.5276%, transparent 100%)',
        'gradient-photo-section': 'linear-gradient(transparent 0%, #F6F4F0 68.7829%)',
      },
    },
  },
  plugins: [],
};
export default config;
