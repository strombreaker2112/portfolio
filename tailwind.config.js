/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#300045',
        secondary: '#FFF1CB',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scroll': 'scroll 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};