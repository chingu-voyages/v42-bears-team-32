/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-2": "#E9ECEF",
        "gray-6": "#868E96",
      },
      width: {
        98: "25rem",
      },
    },
  },
  plugins: [],
};
