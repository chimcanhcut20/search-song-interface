// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index1.html'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        green: '#00ff00',
        orange: '#ffa500',
        gray: '#808080',
      },
    },
  },
  plugins: [],
};
