/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      mobile: '320px',
      // => @media (min-width: 640px) { ... }

      tablet: '530px',
      // => @media (min-width: 1024px) { ... }

      laptop: '800px',
      // => @media (min-width: 1280px) { ... }

      desktop: '1080px',
      // => @media (min-width: 1280px) { ... }

      desktop1xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      desktop2xl: '1580px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
