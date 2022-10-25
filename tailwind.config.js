/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#9FDEA5',
          200: '#6ECE79',
          300: '#0EAD1F',
          400: '#007B21',
          500: '#204421',
        },
        secondary: {
          100: '#F8F8F8',
          200: '#ECF1ED',
        },
        card: {
          100: '#E9F4EE',
          200: '#D8EADD',
          300: '#498553',
        },
      },
      fontFamily: {
        nunito: ['Nunito'],
        inter: ['Inter'],
      },
      borderRadius: {
        '4xl': '80px',
      },
    },
  },
  plugins: [],
};
