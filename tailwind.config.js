/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cardImage: {
        'card-one' : "url(./assets/img4.png)",
        'card-two' : "url(./assets/img5.png)",
        'card-three' : "url(./assets/img7.png)",
        
        
      }
    },
  },
  plugins: [],
}
