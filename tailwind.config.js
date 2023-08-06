/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackHover: "#0b0a0f",
        dark: "#19142a",
        darkLight: "#342e4c",
        grayy: "#d1cedd",
        grayLight: "#e5e4ed",
        primary: "#cc2342",
        primaryLight: "#dd4062",
        secondary: "#2a2344",
        secondaryLight: "#474260",
        whiteHover: "#eae9f2",
      },
      animation: {
        "to-fro": "to-fro 2s linear alternate infinite",
      },
      keyframes: {
        "to-fro": {
          "0%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(20%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
