/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/navBar.{js,jsx,ts,tsx}", // Adjust this based on your file structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Add DaisyUI as a plugin
};