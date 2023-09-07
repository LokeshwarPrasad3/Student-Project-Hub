/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'signika': ['"Signika Negative"', 'serif'],
        'bree': ['"Bree Serif"', 'serif'],
        'overpass': ['"Overpass"', 'serif'],
      },
    },
  },
  plugins: [],
};
