/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      solid: {
        black: "#111111",
      },

      white: colors.white,

      yellowPrimary: {
        500: "#ffbd39",
      },

      greySecond: {
        500: "#1d1d1d",
      },

      gray: {
        100: "#f9f9f9",
        200: "#f1f1f1",
        300: "#F0F0F0",
        400: "#d2d2d2",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
