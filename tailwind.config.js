/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        background: '#FFFFFF',
        'muted-foreground': '#6B7280',
      },
    },
  },
  plugins: [],
} 