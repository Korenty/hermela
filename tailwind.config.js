/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables our JavaScript toggle
  content: [
    "./*.{html,js}", // Scans root HTML and JS files
    "./src/**/*.{html,js}" // Scans any future files in a src folder
  ],
  theme: {
    extend: {
      colors: {
        // LIGHT MODE: The Elevated High-Key
        gallery: {
          alabaster: '#F6F5F0', 
          charcoal:  '#121110', 
          cashmere:  '#ECEAE1', 
          bronze:    '#A38F78', 
        },
        // DARK MODE: The Abyssal Deep
        abyssal: {
          void:      '#09090B', 
          offwhite:  '#E4E4E7', 
          structure: '#18181B', 
          oxidized:  '#8C7A6B', 
        }
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        sans: ['Inter', 'sans-serif'], 
      },
      letterSpacing: {
        widest: '.2em', 
      }
    },
  },
  plugins: [],
}
