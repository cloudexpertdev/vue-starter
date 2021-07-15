module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        blue: ['1px solid #ffffff', '2px'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
