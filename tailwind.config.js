/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in the src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  safelist: [
    // Backend colors (red)
    'bg-red-500',
    'bg-red-600',
    'bg-red-700',
    // Website colors (blue)
    'bg-blue-500',
    'bg-blue-600',
    'bg-blue-700',
    // Android colors (green)
    'bg-green-500',
    'bg-green-600',
    'bg-green-700',
    // Opacity classes that might be used with colors
    'bg-opacity-90'
  ],
  plugins: [require("daisyui")], // Include DaisyUI plugin
};
