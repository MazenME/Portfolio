/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        extend: {
          colors: {
            dark: '#1a1b26',    // Soft dark blue
            slate: '#24283b',   // Medium slate
            light: '#c0caf5',   // Light lavender
            accent: '#7aa2f7',  // Bright blue
            pink: '#bb9af7',    // Soft purple
            teal: '#73daca',    // Bright teal
            red: '#f7768e',     // Coral accent
            orange: '#ff9e64'   // Warm orange
          },
          fontFamily: {
            sans: ['"Inter"', 'sans-serif'],
            mono: ['"Fira Code"', 'monospace'],
            display: ['"Barlow"', 'sans-serif']
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'border-glow': 'border-glow 3s ease-in-out infinite',
            'text-gradient': 'text-gradient 6s ease infinite',
            'bounce-slow': 'bounce 3s infinite',
            'wiggle': 'wiggle 1s ease-in-out infinite',
            'tilt': 'tilt 10s infinite linear',
            'spin-slow': 'spin 6s linear infinite'
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-15px)' },
            },
            'border-glow': {
              '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(122, 162, 247, 0)' },
              '50%': { 'box-shadow': '0 0 15px 3px rgba(122, 162, 247, 0.5)' },
            },
            'text-gradient': {
              '0%, 100%': { 'background-position': '0% 50%' },
              '50%': { 'background-position': '100% 50%' }
            },
            wiggle: {
              '0%, 100%': { transform: 'rotate(-3deg)' },
              '50%': { transform: 'rotate(3deg)' },
            },
            tilt: {
              '0%, 50%, 100%': { transform: 'rotate(0deg)' },
              '25%': { transform: 'rotate(2deg)' },
              '75%': { transform: 'rotate(-2deg)' },
            }
          }
        }
      }
    },
  },
  plugins: [],
}