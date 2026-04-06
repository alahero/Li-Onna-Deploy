import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'houdinni-black':      '#050505',
        'houdinni-nav':        'rgba(0, 0, 0, 0.96)',
        'houdinni-white':      '#ffffff',
        'houdinni-blue':       '#0099ff',
        'houdinni-blue-light': '#3388ff',
        'houdinni-cyan':       '#99eeff',
        'houdinni-muted':      'rgb(136, 136, 136)',
        'houdinni-muted-1':    'rgb(161, 161, 161)',
        'houdinni-muted-2':    'rgb(171, 171, 171)',
      },
      fontFamily: {
        druk:             ['"Druk Text Wide Trial Bold"', 'Impact', 'sans-serif'],
        kanit:            ['"Kanit Regular"', 'Kanit', 'sans-serif'],
        array:            ['"Array Regular"', 'monospace'],
        'helvetica-bold': ['"Helvetica Bold"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        editorial:        ['"Editorial New Regular"', '"Times New Roman"', 'serif'],
      },
      screens: {
        tablet:  '810px',
        desktop: '1200px',
        'xl-frame': '1440px',
      },
      maxWidth: {
        'frame':   '1200px',
        'frame-lg': '1285px',
        'frame-xl': '1440px',
      },
      animation: {
        marquee:      'marquee 30s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
