/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", 'system-ui', 'sans-serif'],
        display: ["'Playfair Display'", 'Georgia', 'serif'],
      },
      colors: {
        dark: {
          900: '#141210',
          800: '#1E1A17',
          700: '#2A2420',
          600: '#3A3028',
        },
        gold: {
          DEFAULT: '#C9A96E',
          muted: '#8A7A6A',
        },
        cream: {
          DEFAULT: '#F7F3EE',
        },
      },
      borderRadius: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
