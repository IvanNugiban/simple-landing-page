/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "lg": "1100px"
      },
      fontFamily: {
        "poppins": "Poppins, sans-serif",
        "plus-jakarta-sans": "Plus Jakarta Sans, sans-serif",
        "playfair" : "Playfair Display ,sans-serif",
        "inter" : "Inter, sans-serif"
      },
      colors: {
        "main": "#094B72"
      },
    },
  },
  plugins: [],
}

