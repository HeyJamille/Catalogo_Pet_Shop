/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(255,192,203,1) 0%, rgba(148,187,233,1) 100%)',
      },
    },
  },
  plugins: [],
}