module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#242426',
        'medium': '#151515',
        'white': '#FFFFFF',
        'white-medium': '#F5F5F5'
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
