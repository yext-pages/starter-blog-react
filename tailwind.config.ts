const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{ts,tsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
