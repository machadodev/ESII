// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        war: "url('./assets/images/background.png')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
