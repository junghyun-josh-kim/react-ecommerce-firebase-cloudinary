/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.jsx',
    './src/components/*.jsx',
    './src/components/ui/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#F96162',
      },
    },
  },
  plugins: [],
};
