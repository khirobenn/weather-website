/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        logo: ['Tektur'],
        textFont : ['Barlow'],
        textInfo : ['Salsa']
      },
      backgroundImage:{
        'theme1' : 'url("https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'theme2' : 'url("https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }, 
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
      screens: {
        'phone': {'max': '732px'},
      }
    },
  },
  plugins: [],
}