/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "linear-gradient(to right bottom, rgba(43, 108, 176, 0.9),rgba(60, 30, 30, 0.6)), url('./bg2.PNG')",
      }
    },
  },
  plugins: [],
}
