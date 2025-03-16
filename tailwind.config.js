/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#092428',
        'secondary': '#E0EFDE',
      },
      fontFamily: {
        'body': ['42dot Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}