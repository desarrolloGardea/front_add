/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#FFB327',
        baseDark: '#D39117',
        baseContrast: '#C54FB9',
        baseLight: '#F3F4F6',
        primary: '#D9D2C5',
        secondary: '#8C8C87',
        terciary: '#3F403E',
      },
    },
  },
  plugins: [],
}