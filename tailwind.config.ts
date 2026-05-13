import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#10B981',
          secondary: '#14B8A6',
          darkBg: '#050807',
          darkCard: '#0B1210',
          lightBg: '#F7FAF8'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(16,185,129,.18), 0 8px 30px rgba(16,185,129,.2)'
      }
    }
  },
  plugins: []
} satisfies Config;
