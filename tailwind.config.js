/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f36100',
          hover: '#e25900',
        },
        darkBg: {
          DEFAULT: '#151515',
          light: '#1f1f1f',
          darker: '#0a0a0a',
        },
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        muli: ['Muli', 'sans-serif'],
      },
      spacing: {
        'spad': '100px', // Standard padding from original template (spad class: 100px top/bottom)
      }
    },
  },
  plugins: [],
}
