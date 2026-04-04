import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDE6BA',
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        tommy: ['"MADE TOMMY ExtraBold"', 'Arial', 'sans-serif'],
        editorial: ['"Editorial New Regular"', '"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
