/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/navBar.{js,jsx,ts,tsx}",
    "./src/components/Footer.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Add DaisyUI as a plugin
};