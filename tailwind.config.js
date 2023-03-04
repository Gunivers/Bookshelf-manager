/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary': {
        DEFAULT: '#3F97FF',
      },
      'white': '#F5F5F5',
      'gray': {
        20: '#E0E3E7',
        30: '#C6CDD6',
        40: '#AAB1B9',
        90: '#26292E',
      },
      'black': '#181A1D',
    },
    borderRadius: {
      DEFAULT: '8px',
      'full': '50%',
      none: '0',
    },
    boxShadow: {
      DEFAULT: '0px 3px 2px rgba(24, 26, 29, 0.2)',
      'inner': 'inset 0px -1px 3px rgba(24, 26, 29, 0.2)'
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
    },
  },
};
