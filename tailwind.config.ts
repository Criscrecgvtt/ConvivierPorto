import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './content/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1E3A34',
        'forest-deep': '#132A25',
        parchment: '#F4EEDF',
        'warm-white': '#FBF8F2',
        terracotta: '#9A5A36',
        'muted-gold': '#C8A96A',
        ink: '#272725',
        'soft-ink': '#5F625E',
        line: '#D8CDBD',
        cream: '#F4EEDF',
        gold: '#C8A96A',
        charcoal: '#272725',
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
