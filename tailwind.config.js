module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        customGray: 'rgba(93, 93, 95, 1)',
        customOrange: 'rgba(255, 122, 0, 1)',
        customBackground: 'rgba(255, 246, 238, 1)', // Added custom background color
      },
      boxShadow: {
        customOrangeShadow: '0px 4px 16px 0px rgba(255, 122, 0, 0.25)',
        customWhiteShadow: '0px 4px 32px 0px rgba(255, 255, 255, 0.25)',
      },
      borderColor: {
        customOrange: 'rgba(255, 122, 0, 1)', // Added custom border color
      },
      backgroundColor: {
        customOGray1: 'rgba(232, 237, 243, 1)',
        customGrey1: 'rgba(212, 220, 229, 1)',
        primary: 'rgba(253, 166, 85, 1)',
        customTextBackground: 'rgba(194, 194, 195, 1)', // Added background color for text
        customBackground: 'rgba(255, 246, 238, 1)', // Added custom background color
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(236.79deg, #0F0F0F 0%, #272A36 100%)',
      },
      textColor: {
        customBackground: 'rgba(194, 194, 195, 1)', // Added text color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
