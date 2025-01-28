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
    extend: {},
  },
  plugins: [],
};
