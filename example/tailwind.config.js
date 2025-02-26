const path = require('path');

const root = path.resolve(__dirname, '..');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../src/**/*.{js,jsx,ts,tsx}',
    `${root}/src/**/*.{js,jsx,ts,tsx}`,
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
