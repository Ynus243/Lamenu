module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      fontFamily: {
        halvar: ['"Halvar Breitschrift"', 'sans-serif'],
      },
      lineHeight: {
        'custom': '33.6px'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(81.88deg, #1A1A1A 12.49%, #272A36 87.51%)',
        'bh': '#E9ECEF'
      },
      broderColor: {
        'custom-gradient': 'rgba(238, 238, 238, 1)',
      },
      screens: {
        'sm': '1160px',
        'xl': '810px',
        'xx': '1300px'
      },
      colors: {
        customOrange: 'rgba(255, 122, 0, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
    plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hover-underline::after': {
          content: '""',
          display: 'block',
          width: '100%',
          height: '2px',
          backgroundColor: '#D1D5DB', 
          transform: 'scaleX(0)',
          transition: 'transform 0.3s ease',
        },
        '.hover-underline:hover::after': {
          transform: 'scaleX(1)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

