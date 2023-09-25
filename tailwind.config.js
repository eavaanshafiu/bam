/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'stone': '#4e738a',
        'stone-dark':'#2e4452',
        'stone-pastel':'#d8e5ed',
        'stone-bold':'#889aa6',
        'stone-highlight':'#e8f3fa'
      }
    },

  },
  plugins: [
  ],
}

