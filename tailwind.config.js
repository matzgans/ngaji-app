/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "allah-kalig": "url('./src/assets/allah.pngg')",
    },
    fontFamily: {
      poppins: "Poppins",
    },
    screens: {
      ip: "375px",
    },
    extend: {
      width: {
        94: "360px",
      },
    },
  },
  plugins: [require("daisyui")],
};
