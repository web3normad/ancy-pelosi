/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, rgb(85, 223, 227) 0%, rgb(135, 206, 235) 100%)'
      },
    },
  },
  plugins: [],
}
