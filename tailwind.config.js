/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      titleFont: ["Raleway", "sans-serif"],
      bodyFont: ["Lato", "sans-serif"],
    },

    extend: {
      screens: {
        mobile: "468px",
      },
    },
  },
  plugins: [],
};
