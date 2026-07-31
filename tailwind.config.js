/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: "#23212C",
        vanilla: "#F1FEC8",
        lavender: "#D2C3F6",
        violet: "#36255C",
        blush: "#F2C4CE",
        navy: "#062045",
        lightLime: "#CDFC8A",
        tealGreen: "#022E21",
        carbon: "#171717",
        lime: "#C6FF34",
        onyx: "#020202",
        candyBlue: "#82D5E5",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};