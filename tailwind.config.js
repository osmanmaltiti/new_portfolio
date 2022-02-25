module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#242426',
        'medium': '#151515'
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
