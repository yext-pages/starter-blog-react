const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{ts,tsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        default: "#27272A",
        light: "#52525B",
        lighter: "#A1A1AA",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
