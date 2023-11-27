/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "npx tailwindcss init",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}

