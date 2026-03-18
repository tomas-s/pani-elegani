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
        ink: '#111111',       // Very dark charcoal/black
        parchment: '#FFFFFF', // Clean white
        accent: '#C4A47C',    // Gold/Tan accent color from the image
        accentHover: '#B39169',
        graphite: '#888888',  // Gray text
        subtle: '#EAEAEA',    // Light borders
        darkBg: '#1A1A1A',    // Slightly lighter dark for alternating sections
      },
      borderRadius: {
        pill: '9999px',
        card: '0px', // The design has sharp corners mostly, or slightly rounded
        window: '4px',
      },
      boxShadow: {
        window: '0 10px 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
