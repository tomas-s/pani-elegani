/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#faf8f5',
          100: '#f2ede5',
          200: '#e6dccb',
          300: '#d4c4a8',
          400: '#bfa67f',
          500: '#b08f66',
          600: '#a37b5a',
          700: '#87634b',
          800: '#6e5141',
          900: '#5a4337',
          950: '#302219',
        },
      },
    },
  },
  plugins: [],
};
