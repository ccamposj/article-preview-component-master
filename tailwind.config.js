/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "lg-gray-blue": "hsl(210, 46%, 95%)",
        "gray-blue": "hsl(212, 23%, 69%)",
        "dk-gray-blue": "hsl(217, 19%, 35%)",
        "dt-dark-blue": " hsl(214, 17%, 51%)",
      },
    },
    fontFamily: {
      body: ["Manrope", "sans-serif"],
    },
    backgroundImage: {
      "card-img": "url('/images/drawers.jpg')",
    },
  },
  plugins: [],
};
