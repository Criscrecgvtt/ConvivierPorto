import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: '#223b2d',
        cream: '#f4e9d8',
        gold: '#b88f4a',
        charcoal: '#171715',
      },
      fontFamily: {
        display: ['var(--font-playfair)'],
        sans: ['var(--font-inter)'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17, 24, 39, 0.18)',
      },
    },
  },
  plugins: [],
} satisfies Config;
