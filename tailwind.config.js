const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fredoka', ...defaultTheme.fontFamily.sans],
      },
      height: {
        128: '32rem',
      },
      keyframes: {
        flip: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(-1)' },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['dark', 'rounded'],
  },
};
