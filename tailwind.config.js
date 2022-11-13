/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/Navbar.jsx', './src/components/User.jsx'],
  theme: {
    extend: {
      colors: {
        brand: '#F96162',
      },
    },
  },
  plugins: [],
};
