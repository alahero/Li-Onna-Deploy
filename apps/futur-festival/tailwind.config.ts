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
          black: '#0D0D0D',
          dark: '#1A1A2E',
          purple: '#8B5CF6',
          'purple-light': '#A78BFA',
          cyan: '#06B6D4',
          'cyan-light': '#22D3EE',
          pink: '#EC4899',
          'pink-light': '#F472B6',
          white: '#FFFFFF',
          gray: '#6B7280',
          'gray-light': '#9CA3AF',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-neon':
          'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #EC4899 100%)',
        'gradient-purple-cyan':
          'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
        'gradient-dark':
          'linear-gradient(180deg, #0D0D0D 0%, #1A1A2E 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-up-delay': 'slideUp 0.6s ease-out 0.2s both',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
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
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.9), 0 0 80px rgba(6, 182, 212, 0.3)' },
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow:
              '0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 40px #8B5CF6, 0 0 80px #8B5CF6',
          },
          '20%, 24%, 55%': { textShadow: 'none' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanLine: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.3)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.3)',
        'neon-lg-purple': '0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(139, 92, 246, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
