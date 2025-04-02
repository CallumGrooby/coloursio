/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "text-3xl",
    "text-2xl",
    "text-xl",
    "text-lg",
    "text-base",
    "text-sm",
  ],
  theme: {
    extend: {
      colors: {
        text: "#6C6E6F",
        background: "#F1F5F9",
        accent: "#F59E0B",
        stroke: "#CBD5E1",
      },
    },
  },
  plugins: [],
};
