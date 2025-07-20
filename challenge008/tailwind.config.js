/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors:{
        "blue-950": "hsl(240, 38%, 20%)",
        "myGray-400": "hsl(240, 18%, 77%)"
      },
      fontSize:{
        "body": "32px"
      },
      fontFamily:{
        "inter":"inter_"
      }
    },
  },
  plugins: [],
}

