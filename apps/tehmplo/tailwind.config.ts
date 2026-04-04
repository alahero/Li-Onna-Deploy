import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '390px',
      'md': '810px',
      'lg': '1200px',
    },
    extend: {
      colors: {
        'tehmplo-bg': '#0f0e0c',
        'tehmplo-hero': '#0d0e11',
        'tehmplo-accent': '#ef8024',
        'tehmplo-nav': '#9c9b9b',
        'tehmplo-form': '#212121',
        'tehmplo-footer': '#000000',
        'tehmplo-muted': '#888888',
      },
      fontFamily: {
        'basteleur': ['"Basteleur Moonlight"', 'sans-serif'],
        'basteleur-bold': ['"Basteleur Bold"', 'sans-serif'],
        'austin-italic': ['"Austin Cyr Italic"', 'serif'],
        'austin-roman': ['"Austin Cyr Roman"', 'serif'],
        'source-sans': ['"Source Sans 3"', 'sans-serif'],
        'general-sans': ['"General Sans"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'events-gradient': 'linear-gradient(180deg, #434442 0%, rgb(33, 25, 28) 100%)',
        'newsletter-gradient': 'linear-gradient(180deg, #000000 0%, rgb(6, 19, 28) 107%)',
      },
      height: {
        'nav': '60px',
        'vip': '318px',
        'location': '574px',
        'newsletter': '456px',
        'footer': '339px',
      },
      animation: {
        'letter-in': 'letterIn 0.6s ease-out forwards',
      },
      keyframes: {
        letterIn: {
          '0%': {
            opacity: '0.001',
            filter: 'blur(5px)',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0)',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
