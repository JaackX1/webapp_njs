/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        animateWave: {
          '0%': { 'background-position-x': '1000px' },
          '100%': { 'background-position-x': '0' },
        },
        animateWave2: {
          '0%': { 'background-position-x': '0' },
          '100%': { 'background-position-x': '1000px' },
        }
      },
      animation: {
        wave1: 'animateWave 4s linear infinite',
        wave2: 'animateWave2 4s linear infinite',
        wave3: 'animateWave 3s linear infinite',
        wave4: 'animateWave2 3s linear infinite',
      }
    },
  },
  plugins: [],
}
