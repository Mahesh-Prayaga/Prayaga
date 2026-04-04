/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antonio: ['"Antonio"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        roboto: ['"Roboto Mono"', "sans-serif"],
        instrument: ['"Instruement Serif"', "serif"],
        josefin: ['"Josefin Sans"', "sans-serif"],
        dm: ['"DM Sans"', "sans-serif"],
      },
      keyframes: {
        moveLines: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-200px 0" },
        },
      },
      animation: {
        "move-lines": "moveLines 10s linear infinite",
      },
    },
  },
  plugins: [],
};
