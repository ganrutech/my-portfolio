module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#276F6B",
        secondary: "#0E2F3E",
        light: "#F8F7F1",
        themeOrange: "#FC9645",
      },
    },
  },
  plugins: [],
};
