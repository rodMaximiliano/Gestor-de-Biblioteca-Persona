/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        poncho: {
          oscuro: '#3B0A0A',
          medio: '#6B0F0F',
          dorado: '#FFD700',
          crema: '#F5DEB3',
        },
      },
    },
  },
  plugins: [],
}