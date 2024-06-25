/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE363F",
        secondary: "#141D38",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xmd: "500px",
        xsm: "320px",
      },
    },
  },
  plugins: [],
};
