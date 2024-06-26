/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#2c120a",
          800: "#582415",
          700: "#83361f",
          600: "#af4829",
          500: "#d1603d",
          400: "#db7f64",
          300: "#e49f8b",
          200: "#edbfb1",
          100: "#f6dfd8",
        },
        secondary: {
          900: "#35290c",
          800: "#6a5218",
          700: "#a07b24",
          600: "#d1a234",
          500: "#ddb967",
          400: "#e4c887",
          300: "#ebd6a5",
          200: "#f1e4c3",
          100: "#f8f1e1",
        },
      },
      backgroundImage: {
        "main-bg": "url(/bg1.jpg)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
