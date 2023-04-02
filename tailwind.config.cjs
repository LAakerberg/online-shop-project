/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      mobile: '320px',
      // => @media (min-width: 320px) { ... }

      tablet: '530px',
      // => @media (min-width: 530px) { ... }

      laptop: '800px',
      // => @media (min-width: 800px) { ... }

      desktop: '1080px',
      // => @media (min-width: 1080px) { ... }

      desktop1xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      desktop2xl: '1580px',
      // => @media (min-width: 1580px) { ... }
    },
  },
  plugins: [],
};
