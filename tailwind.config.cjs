/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#89a5c0',
        secondary: '#879499',
        accent: '#E0D6B8',
      },
    },
  },
  plugins: [],
};
