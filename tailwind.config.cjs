/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px',
      'sm': '480px',
      'md': '547px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1680px',
      '3xl': '2000px',
    },
    extend: {
      colors:{ 
        primary:'#00ff00',
        secondary:'#ff0000',
        blue: {
          450:'#0000f4'
        }

      }
    },
 
  },
  plugins: [],
}
