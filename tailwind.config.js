/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "280px",
      xs: "320px",
      sm: "420px",
      md: "600px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        abel: ["Abel", "Sans-serif"],
        carattere: ["Carattere", "Sans-serif"],
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(14 165 233)",
        "4xl": "2px 5px 10px 2px rgba(14 165 233)",
        "5xl": "0 35px 60px -15px rgba(239 68 68 )",
        "6xl": "2px 5px 10px 2px rgba(239 68 68 )",
      },
    },
  },
  plugins: [],
};
