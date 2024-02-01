/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#FAFCFF',
          25: '#F2EDF7',
          50: '#EDEDED',
          100: '#CCB7E1',
          200: '#B293D2',
          300: '#996FC3',
          400: '#6E419B',
          500: '#663C90',
          600: '#4C2D6C',
          700: '#331E48',
          800: '#190F24',
          900: '#0D0812',
        },
        gray: {
          0: '#FFFFFF',
          9: '#44444F',
          10: '#171725',
          25: '#F6F6F6',
          50: '#EDEDED',
          100: '#DBDADA',
          200: '#C9C8C8',
          600: '#636262',
          700: '#424141',
          800: '#212121',
          900: '#101010',
          1000: '#DF0103',
        }
      },
      screens: {
        'sm': { 'min': '360px', 'max': '575px' },

        'md': { 'min': '576px', 'max': '768px' },

        'lg': { 'min': '769px', 'max': '1199px' },

        'xl': { 'min': '1200px', 'max': '1439px' },

        '2xl': { 'min': '1440px' },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'h1': { fontSize: '32px' },
        'h2': { fontSize: '22px' },
        'h3': { fontSize: '20px' },
        'h4': { fontSize: '18px' },
        'h5': { fontSize: '16px' },
        'h6': { fontSize: '14px' },
      })
    })
  ],
};
