/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif']
      },
      backgroundColor: {
        btn: '#00AD98'
      },
      colors: {
          'secondary': '00AD98',
          'tertiary': '#FFB347',
          'dark': '#333333',
          'semidark': '#555555'
      }
    },
  },
  plugins: [],
}
