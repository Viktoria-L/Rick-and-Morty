/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'sm': '450px',
    },
    maxWidth: {
      208: '208px',
    },
    extend: {},
    fontFamily: {
      rick: ['Rickmorty'],
    },
  },
  plugins: [],
}

