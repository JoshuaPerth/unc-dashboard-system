/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx.ts.tsx}'],
  theme: {
    extend: {
      colors: {
        'sub-gray': '#8D8D8D',
        'head-gray': '#393939',
        'true-red': '#FF2A2A',
        'darker-red': '#E6262',
        'lines-color': '#AFAFAF',
      },
    },
  },
  plugins: [],
};
