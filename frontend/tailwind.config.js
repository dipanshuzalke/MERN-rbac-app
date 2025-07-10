/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter from Google Fonts
      },
      colors: {
        primary: "#4f46e5", // Tailwind indigo-600
        darkBg: "#1f2937", // Tailwind gray-800
      },
    },
  },
  plugins: [],
}
