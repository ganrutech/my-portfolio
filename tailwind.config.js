const plugin = require("tailwindcss/plugin");

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
      backgroundImage: {
        "SDWAN-BG": "url('/src/assets/images/SDWAN.svg')",
        "IOT-BG": "url('/src/assets/images/iot.svg')",
        "Analytics-BG": "url('/src/assets/images/analytics.svg')",
        "Full-BG": "url('/src/assets/images/fullstack.svg')",
        "Ecommerce-BG": "url('/src/assets/images/ecommerce.svg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
        h4: { fontSize: theme("fontSize.base") },
        h5: { fontSize: theme("fontSize.sm") },
        h6: { fontSize: theme("fontSize.xs") },
      });
    }),
  ],
};
