/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      fontFamily: {
        Redhat:'Red__'
      },
      colors:{
        MyRed: "hsl(14, 86%, 42%)",
        MyGreen:" hsl(159, 69%, 38%)",
        MyRose50: "hsl(20, 50%, 98%)",
        MyRose100 :" hsl(13, 31%, 94%)",
        Rose300: "hsl(14, 25%, 72%)",
        Rose400: "hsl(7, 20%, 60%)",
        Rose500:" hsl(12, 20%, 44%)",
        Rose900:" hsl(14, 65%, 9%)",
      }
    },
  },
  plugins: [],
}

