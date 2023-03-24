/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind");

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        interMedium: ["Inter_500Medium"],
        interBold: ["Inter_700Bold"],
        interExtraBold: ["Inter_800ExtraBold"],
      },
    },
  },
  presets: [nativewind],
};
