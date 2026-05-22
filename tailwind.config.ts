/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#0b1726',
        'navy-mid': '#132039',
        'navy-light': '#1e3254',
        gold: '#c8a04a',
        'gold-light': '#e4c06e',
        'gold-muted': '#a8862e',
        cream: '#f8f5ef',
        'cream-dark': '#ede9e0',
        muted: '#6b7a99',
        med: '#1a6b8a',
        'med-light': '#e6f3f8',
        dev: '#2a7a4f',
        'dev-light': '#e6f3ec',
      },
    },
  },
  plugins: [],
};
