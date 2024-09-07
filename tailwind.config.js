/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        green: '#28a745',
        white: '#ffffff',
        orange: '#ffa500',
      },
    },
  },
  plugins: [],
};


