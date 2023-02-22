/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary': {
        DEFAULT: '#3F97FF',
      },
      'white': '#F5F5F5',
      'gray': {
        20: '#E0E3E7',
        90: '#26292E',
      },
      'black': '#181A1D',
    },
    borderRadius: {
      DEFAULT: '8px',
      none: 'none',
    },
    boxShadow: {
      DEFAULT: '0px 3px 2px rgba(24, 26, 29, 0.2)'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
    },
  },
};
