/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      colors:{
        orange:"hsl(26,100%,55%)",
        paleOrange:"hsl(25,100%,94%)",
        veryDarkBlue:"hsl(220,13%,13%)",
        darkGrayishBlue:"hsl(219, 9%, 45%)",
        lightGrayishBlue:"hsl(223, 64%, 98%)",
        white:"hsl(0, 0%, 100%)",
        black:"hsl(0, 0%, 0%)",
        ligthboxBg:"rgba(0,0,0,0.75)",
/**### Primary

- Orange: hsl(26, 100%, 55%)
- Pale orange: hsl(25, 100%, 94%)

### Neutral

- Very dark blue: hsl(220, 13%, 13%)
- Dark grayish blue: hsl(219, 9%, 45%)
- Grayish blue: hsl(220, 14%, 75%)
- Light grayish blue: hsl(223, 64%, 98%)
- White: hsl(0, 0%, 100%)
- Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)
 */
      },
      fontSize:{
        p:"16px"
      },
      fontFamily:{
        kuma:"kumbsans"
      }
    },
  },
  plugins: [],
}

