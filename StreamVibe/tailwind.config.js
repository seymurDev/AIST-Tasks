/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '162px': '162px',
      },
      fontFamily: {
        'monrope': ['Monrope', 'sans-serif'],
      },
      screens: {
        'bs': '1921px',
        'ds': '1200px',
        'ms': '390px',
      },
    },
  },
  plugins: [],
}

