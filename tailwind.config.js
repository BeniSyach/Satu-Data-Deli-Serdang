/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};