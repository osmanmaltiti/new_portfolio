module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#060b31',
        'medium': '#030724'
      },
      fontFamily: {
        'ubuntu': 'Ubuntu',
        'right': 'Righteous',
        'mons': 'Montserrat'
      }
    },
  },
  plugins: [],
}
