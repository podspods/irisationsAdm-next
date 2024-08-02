// from https://colors.eva.design/

import DarkMode from '@/components/DarkMode';

// module.exports = {
const tailwindConfig = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  // darkMode: media, // ou 'false' ou 'class'
  theme: {
    extend: {
      colors: {
        'link-default': '#1d4ed8',
        'link-hover': '#2563eb',
        iriPri: {
          100: '#D6E4FF',
          200: '#ADC8FF',
          300: '#84A9FF',
          400: '#6690FF',
          500: '#3366FF',
          600: '#254EDB',
          700: '#1939B7',
          800: '#102693',
          900: '#091A7A'
        },
        primary: {
          100: '#CCCCFF',
          200: '#9999FF',
          300: '#6666FF',
          400: '#3F3FFF',
          500: '#0000FF',
          600: '#0000DB',
          700: '#0000B7',
          800: '#000093',
          900: '#00007A'
        },
        secondary: {
          100: '#EBCBF6',
          200: '#D49BEE',
          300: '#A562CD',
          400: '#71369C',
          500: '#350C5A',
          600: '#29084D',
          700: '#1E0640',
          800: '#150334',
          900: '#0F022B'
        },
        neutral: {
          100: '#F2EDF4',
          200: '#E5DCE9',
          300: '#B8AEBF',
          400: '#79717F',
          500: '#27242A',
          600: '#1E1A24',
          700: '#16121E',
          800: '#0F0B18',
          900: '#0A0614'
        },
        success: {
          100: '#E5F8D0',
          200: '#C6F1A3',
          300: '#96D76E',
          400: '#65AF44',
          500: '#2f7b17',
          600: '#1F6910',
          700: '#13580B',
          800: '#084707',
          900: '#043B06'
        },
        info: {
          100: '#CBFEF3',
          200: '#98FEEF',
          300: '#65FDF3',
          400: '#3EF7FB',
          500: '#00E0F9',
          600: '#00AFD6',
          700: '#0084B3',
          800: '#005E90',
          900: '#004477'
        },
        warning: {
          100: '#FFF2CE',
          200: '#FFE19D',
          300: '#FFCC6D',
          400: '#FFB848',
          500: '#FF960C',
          600: '#DB7708',
          700: '#B75B06',
          800: '#934203',
          900: '#7A3102'
        },
        danger: {
          100: '#FFE4D5',
          200: '#FFC2AC',
          300: '#FF9982',
          400: '#FF7363',
          500: '#FF3330',
          600: '#DB2330',
          700: '#B71831',
          800: '#930F2F',
          900: '#7A092E'
        }
      },
      fontFamily: {
        irisations: ['Roboto', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        custom: '0px 0px 20px -18px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  // variants: {
  //   extend: {}
  // },
  plugins: []
  // DarkMode: 'class'
};

export default tailwindConfig;

// export default module.exports;
