/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#00ffff',
          500: '#00cccc', // Slightly darker for buttons
        }
      }
    },
  },
  plugins: [],
};