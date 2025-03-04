/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      defaultOrange: "#14199C",
      defaultOrangeHover: "#b74600",
      secondaryOrange: "#FFF1E9",
      primaryBorder: "#DED9DD",
      secondaryTextColor: "#585858",
    },
    screens: {
      xs: "320px",
      sm: "425px",
      md: "768px",
      lg: "992px",
      xl: "1150px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
