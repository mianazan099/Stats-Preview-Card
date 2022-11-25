/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    backgroundImage: {
      header: "url(./Image/image-header.jpg)",
    },
    screens: {
      lg: "800px",
      xl: "860px",
    },
    colors: {
      darkBlue: "hsl(233, 47%, 7%)",
      darkDesaturatedBlue: "hsl(244, 38%, 16%)",
      softViolet: "hsl(277, 64%, 61%)",
      white: {
        200: "hsla(0, 0%, 100%, 0.6)",
        300: "hsla(0, 0%, 100%, 0.75)",
        DEFAULT: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lexendDeca: ["Lexend Deca", "sans-serif"],
    },
    fontWeight: {
      regular: "400",
      bold: "700",
    },
    extend: {},
  },
  plugins: [],
};
