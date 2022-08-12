/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        erieBlack: '#1E1E1E',
        turquoise: '#41E4BD',
        paleBlue: '#ADF1ED',
        water: '#C6FAF7',
        waterSpout: '#99FFFF',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'source-code': ['Source Code Pro', 'monospace'],
      }
    },
  },
  plugins: [],
}
