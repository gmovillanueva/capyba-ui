/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
      },
    },
    colors: {
      blackrussian: '#0B0C10',
      bunker: '#1F2833',
      glacier: '#C5C6C7',
      turquoise: '#66FCF1',
      aqua: '#45A29E',
    }
  },
  plugins: [],
}

