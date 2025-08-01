/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
    
    colors:{
      Neutral900 : `hsl(227, 75%, 14%)`,
      Neutral800: `hsl(226, 25%, 17%)`,
      Neutral700: `hsl(225, 23%, 24%)`,
      Neutral600: `hsl(226, 11%, 37%)`,
      Neutral300: `hsl(0, 0%, 78%)`,
      Neutral200: `hsl(217, 61%, 90%)`,
      Neutral100: `hsl(0, 0%, 93%)`,
      Neutral0: `hsl(200, 60%, 99%)`,
      // Red
      Red400: `hsl(3, 86%, 64%)`,
      Red500: `hsl(3, 71%, 56%)`,
      Red700: `hsl(3, 77%, 44%)`,
     
    },

    fontSize:{
    paragrapheSize: '16px'
   },

    fontFamily: {
    Noto : 'Noto',
    NotoBold : 'NotoBold'
  }

},
  },
  plugins: [],
}

// ### Neutral

// - **Neutral 900**: `hsl(227, 75%, 14%)`
// - **Neutral 800**: `hsl(226, 25%, 17%)`
// - **Neutral 700**: `hsl(225, 23%, 24%)`
// - **Neutral 600**: `hsl(226, 11%, 37%)`
// - **Neutral 300**: `hsl(0, 0%, 78%)`
// - **Neutral 200**: `hsl(217, 61%, 90%)`
// - **Neutral 100**: `hsl(0, 0%, 93%)`
// - **Neutral 0**: `hsl(200, 60%, 99%)`

// ### Red

// - **Red 400**: `hsl(3, 86%, 64%)`
// - **Red 500**: `hsl(3, 71%, 56%)`
// - **Red 700**: `hsl(3, 77%, 44%)`

// ### Gradient

// - **Light Gradient**: `linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)`
// - **Dark Gradient**: `linear-gradient(180deg, #040918 0%, #091540 100%)`