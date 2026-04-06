import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mg: {
          bg: '#0e0e0f',
          'hero-bg': '#3d3e39',
          surface: '#000000',
          white: '#ffffff',
          gray: '#888888',
          'gray-muted': '#6e6e6e',
          'gray-dark': '#525252',
          'gray-border': '#d9d9d9',
          blue: '#0099ff',
          'card-bg': '#444444',
        },
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"Fragment Mono"', 'monospace'],
      },
      fontSize: {
        'hero': ['65px', { lineHeight: '1.1em', letterSpacing: '0em', fontWeight: '900' }],
        'hero-mobile': ['36px', { lineHeight: '1.1em', letterSpacing: '0em', fontWeight: '900' }],
        'section-title': ['44px', { lineHeight: '1.2em', letterSpacing: '0.06em', fontWeight: '300' }],
        'division-title': ['20px', { lineHeight: '1em', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        page: '1500px',
        nav: '1200px',
      },
      height: {
        nav: '64px',
      },
      borderRadius: {
        button: '13px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-up-delay-1': 'fadeInUp 0.6s ease-out 0.1s forwards',
        'fade-in-up-delay-2': 'fadeInUp 0.6s ease-out 0.2s forwards',
        'fade-in-up-delay-3': 'fadeInUp 0.6s ease-out 0.3s forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      backgroundImage: {
        'stripe-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='126' height='126'%3E%3Cpath d='M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z' fill='rgba(136,136,136,0.2)' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
