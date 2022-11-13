/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      primary: 'rgb(17,24,39)'
    },
    extend: {},
  },
  plugins: [],
}
