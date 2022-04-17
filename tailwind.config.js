module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avenir", "Arial", "system-ui", "sans-serif"],
        mono: ["Courier", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
