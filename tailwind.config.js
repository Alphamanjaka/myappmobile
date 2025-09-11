/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1E88E5", // bleu principal
          light: "#42A5F5",
          dark: "#1565C0",
        },
      },
    },
  },
  plugins: [],
};
