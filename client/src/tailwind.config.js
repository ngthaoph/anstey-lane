/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust your paths accordingly
  ],
  theme: {
    extend: {
      colors: {
        nevada: {
          50: "#f5f6f6",
          100: "#e4e8e9",
          200: "#ccd2d5",
          300: "#a8b3b8",
          400: "#7d8c93",
          500: "#606e75",
          600: "#545f66",
          700: "#485056",
          800: "#40464a",
          900: "#383c41",
          950: "#232629",
        },
      },
    },
  },
  plugins: [],
};
