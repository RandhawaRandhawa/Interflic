
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      Transparent: "transparent",
      current: "currentColor",
      White: "#ffffff",
      Black: "#000000",
      Text: "#e6e6e6",
      DarkPurple: "#471e4b",
      Accent1: "#8d3a95",
      Accent2: "#ae4ab8",
      Accent3: "#6a2c70",
    },
    fontFamily: {
      title: ["Clash Display", "serif"],
      para:  ["Inter", "serif"],
    },
    extend: {
      animation: {
        "up-down": "upDown 3s ease-in-out infinite",
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
