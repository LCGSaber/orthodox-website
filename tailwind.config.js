/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const mainWidth = '1640px'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
      },
      spacing: {
        'main-contain': mainWidth,
      },
      maxWidth: {
        'main-contain': mainWidth,
      },
      fontFamily: {
        Verah: ['"Vera Humana 95"', ...defaultTheme.fontFamily.sans],
        Neue: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
        Noto: ["Noto Serif TC", "Noto Serif SC", "Times", "Times New Roman", "serif"],
      },
      colors: {
        primary: 'rgb(73, 120, 57)',
        secondary: '#ffffff',
        neutral: '#f8f9fa',
        dark: '#333333',
      },
      
    },
  },
  plugins: [],
}
