/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        spacebg:
        "url(src/assets/img/sw_background.jpeg)"
          
      },
    },
  },
  plugins: [],
};

