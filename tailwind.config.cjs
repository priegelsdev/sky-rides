/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#425b81',
        secondary: '#879499',
        accent: '#E0D6B8',
      },
      backgroundImage: {
        hero: "url('./src/assets/images/hero-bg.jpg')",
        about: "url('./src/assets/images/about.jpg')",
      },
    },
  },
  plugins: [],
};
