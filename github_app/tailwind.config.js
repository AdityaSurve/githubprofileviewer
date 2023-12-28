/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
      },
      animation: {
        expand: "expand 3s ease-in-out",
        expandHorizontal: "expandHorizontal 1s ease-in-out",
      },
      keyframes: {
        expand: {
          "0%": { height: "0" },
          "66%": { height: "0" },
          "100%": { height: "4rem" },
        },
        expandHorizontal: {
          "0%": { width: "0" },
          "66%": { width: "0" },
          "100%": { width: "24rem" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
