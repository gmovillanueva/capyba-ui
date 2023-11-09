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
      'sunset': {
        '50': '#FFFAF5',
        '100': '#FFF5EB',
        '200': '#FCE0CA',
        '300': '#FAC7AA',
        '400': '#F78D6F',
        DEFAULT: '#f24233',
        '600': '#DB382A',
        '700': '#B5271D',
        '800': '#911B13',
        '900': '#6E110A',
        '950': '#470804'
      },
      'alto': {
        '50': '#FCFCFC',
        '100': '#FAFAFA',
        '200': '#F5F5F5',
        '300': '#F0F0F0',
        '400': '#E3E3E3',
        DEFAULT: '#d6d6d5',
        '600': '#C1C2AE',
        '700': '#9BA178',
        '800': '#75804D',
        '900': '#52612C',
        '950': '#2E3D12'
      },
      'marshland': {
        '50': '#F2F2F0',
        '100': '#E7E8E3',
        '200': '#C3C4BB',
        '300': '#9EA194',
        '400': '#595C50',
        DEFAULT: '#141511',
        '600': '#10120D',
        '700': '#0D0F09',
        '800': '#0A0D06',
        '900': '#070A04',
        '950': '#030501'
      },
      'redhint': {
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFFFFF',
        '300': '#FFFFFF',
        '400': '#FCFAFA',
        DEFAULT: '#fcfafa',
        '600': '#E3CACA',
        '700': '#BD8C8C',
        '800': '#965959',
        '900': '#733434',
        '950': '#4A1515'
      }
    }
  },
  plugins: [],
}

