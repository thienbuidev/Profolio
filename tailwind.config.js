/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        100: "5px 5px 10px #c5c5c5, -5px -5px 10px #ffffff",
        custom: "7px 7px 10px #c5c5c5, -7px -7px 10px #ffffff",
        300: "23px 23px 45px #c5c5c5, -23px -23px 45px #ffffff",
      },
    },
  },
  plugins: [],
};
