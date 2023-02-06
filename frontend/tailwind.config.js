/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        h1: ['36px', '64px'],
        h3: ['18px', '32px'],
        h4: ['14px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      colors: {
        'primary-0': '#EFF6E7',
        'primary-1': '#DBEBC9',
        'primary-3': '#B2D48E',
        'primary-5': '#8ABE53',
        'primary-7': '#618639',
        'gray-0': '#F8F9FA',
        'gray-1': '#F1F3F5',
        'gray-2': '#E9ECEF',
        'gray-3': '#DEE2E6',
        'gray-5': '#ADB5BD',
        'gray-6': '#868E96',
        'dark-2': '#909296',
        'dark-3': '#5C5F66',
        'dark-4': '#373A40',
        'yellow-2': '#FFE081',
        'blue-1': '#BED8FB',
        'red-1': '#EF9A9B',
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
