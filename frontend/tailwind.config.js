/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': {'max': '268px'},
        'xs': {'max': '931px'},
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
}
