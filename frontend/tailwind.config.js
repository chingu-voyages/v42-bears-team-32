/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary-0": "#EFF6E7",
        "primary-1": "#DBEBC9",
        "primary-3": "#B2D48E",
        "primary-5": "#8ABE53",
        "gray-2": "#E9ECEF",
        "gray-3": "#DEE2E6",
        "gray-6": "#868E96",
        "dark-3": "#5C5F66",
        "dark-4": "#373A40",
      },
      dropShadow: {
        lg: [
          '0 1px 3px rgba(0, 0, 0, 0.05)',
          '0 10px 15px rgba(0, 0, 0, 0.04)',
          '0 7px 7px rgba(0, 0, 0, 0.04)',
        ],
      },
      width: {
        98: '29rem',
      },
    },
  },
  plugins: [],
};
