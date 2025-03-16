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
      dropShadow: {
        white: "0 0px 6px rgba(248, 243, 235, 0.5)",
        black: "0 0px 6px rgba(48, 48, 48, 0.5)",
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [],
};
