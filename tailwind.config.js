/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './theme/*.{liquid,js,html,json}',
    './theme/{locales,sections,snippets,templates,layout,config}/**/*.{liquid,js,html,json}',
    './src/**/*.{js,css}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

