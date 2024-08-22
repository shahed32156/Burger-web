/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontsFamily: {
        fonts: ["Matemasie","sans-serif"],
      }
    },
  },
  plugins: [],
}