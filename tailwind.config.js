/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        spacebg:
        "url(src/assets/img/sw_background.jpeg)"
          // "url(http://www.script-tutorials.com/demos/360/images/stars.png)",
          // colors:{
          //   'span-text': ' rgb(107 114 128)',
          // }
      },
    },
  },
  plugins: [],
};

