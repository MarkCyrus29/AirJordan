/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        "custom-red": "95131F",
        "custom-blue": "2F3653",
        "custom-green": "058A49",
        "custom-yellow": "D08C01",
      },
    },
  },
  plugins: [],
};
