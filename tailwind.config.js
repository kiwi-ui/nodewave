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
        'secondary': '#00AD98',
        'tertiary': '#FFB347',
        'semiblack': '#333333',
        'semidark': '#555555',
        'blur' : "#717171"
      },
      backgroundImage: {
        'hero': 'url("/assets/images/background.png")',
        'jasa': 'url("/assets/images/jasabg.png")',
        'rayu': 'url("/assets/images/rayumotor.png")',
        'gradientImg': 'url("/assets/images/bghow.jpg")',
        'gradientImgBlack':  'url("/assets/images/gradientBlack.png")'
      },
      dropShadow: {
        'fit' : '0px 2px 6px 0px rgba(0, 0, 0, 0.24)'
      }
    },
  },
  plugins: [],
}
