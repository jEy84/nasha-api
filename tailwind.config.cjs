/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
     
    },
    extend: {
      height:{
        '13':'50px',
      }
    },
    colors:{
       'white':'#ffff',
       'russianviolet': '#10002bff',
       'russianviolet-2': '#240046ff',
       'persianindigo': '#3c096cff',
       'purple': '#5a189aff',
       'french-violet': '#7b2cbfff',
       'amethyst': '#9d4eddff',
       'heliotrope': '#c77dffff',
       'mauve': '#e0aaffff',
       'hovery': '#5F008F',
       'hoeverin':"#EBC2FF",
       'btnnss':"#8b79d9",
       'palepurple':"#F8EBFF",
       'bluetype':"#662ab9"
    },

  },
  plugins: [],
}
