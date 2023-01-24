/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'f-black': {
          100: '#384359',
          200: '#262c3a',
        },
        'f-green': {
          100: '#c5eaea',
          200: '#6bc2c3',
          300: '#2bb9ba',
          400: '#008c8d',
        },
      },
    },
  },
  plugins: [],
};
