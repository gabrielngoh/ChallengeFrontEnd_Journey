/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
       "Gradient_from_left":"hsl(236, 72%, 79%)",
       "gradient_to_right":"hsl(237, 63%, 64%)",
       "very_Light_grayish_Blue":"hsl(240, 78%, 98%)",
       "Light_grayish_Blue":"hsl(234, 14%, 74%)",
       "grayish_Blue":"hsl(233, 13%, 49%)",
       "dark_grayish_Blue":"hsl(232, 13%, 33%)",
     
      },
      fontSize:{
        "bodyFont":"15px"
      },
      fontFamily:
      {
        "Montserrat":"Montserrat , sans-serif"
      }
    },
  },
  plugins: [],
}

