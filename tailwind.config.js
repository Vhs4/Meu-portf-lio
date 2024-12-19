/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        colors: {
            primary: '#3B82F6',
            secondary: '#10B981',
        },
    
    },
  },
  plugins: [],
}