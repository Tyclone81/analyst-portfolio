/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        labDark: '#071313',       // The deep, premium near-black background
        labMint: '#5eead4',       // The vibrant, glowing teal for active highlights
        labSurface: '#112d2d',    // The dark teal-slate shade used for containers and borders
      }
    },
  },
  plugins: [],
}
