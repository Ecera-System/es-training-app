/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'max-lg': {'max': '1023px'},
    }
  },
  plugins: [],
}
