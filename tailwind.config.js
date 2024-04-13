/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors : {
        primary: '#018391',
        secondary: '#64748b',
        dark: '#0f172a',
        krem: '#F6DBAC',
      },
      screens: {
        '2xl' : '1320px',
      },
      
    },
  },
  plugins: [],
}

