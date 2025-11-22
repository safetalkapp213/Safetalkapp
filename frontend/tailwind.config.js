/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C4E4C",   // DEEP GREEN
        lightGreen: "#D7EAE9",// LIGHT GREEN
        background: "#F8FAFC", // SLIGHT GRAY BACKGROUND
        mint: '#bbf7d0',      // Mint Green
        charcoal: '#374151',   //charcoal gray
      }
    },
  },
  plugins: [],
}