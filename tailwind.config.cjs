/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#344556',
        secondary: '#9fa9b5',
        primaryLight: '#557391',
        accent: '#E0D6B8',
        accentTwo: '#f5cc52',
      },
      backgroundImage: {
        hero: "url('/src/img/background-home.png')",
      },
    },
  },
  plugins: [],
};
