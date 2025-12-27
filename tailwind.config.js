/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        sans: ["system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
        newsreader: ["Newsreader", "serif"],
      },
    },
  },
  plugins: [],
};
