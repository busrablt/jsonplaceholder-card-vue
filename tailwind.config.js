const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-purple": "#F5F3FF",
      },
    },
    fontFamily: {
      bebas: ["Bebas Neue", "cursive"],
      libre: ["Libre Baskerville", "serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities("@tailwindcss/line-clamp");
    }),
  ],
};
