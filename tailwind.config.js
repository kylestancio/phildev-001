/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1040px',
        '2xl': '1166px',
      },
    },
    extend: {
      colors: {
        
      }
    }
  },
  plugins: [],
}