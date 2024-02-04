/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'darkTheme-primary':'#371B58',
        'darkTheme-secondary':'#4C3575',
        'darkTheme-tertiary':'#B9B4C7',
        'darkTheme-text':'#FAF0E6',
        'lightTheme-primary':'#D2E0FB',
        'lightTheme-secondary':'#fff11',
        'lightTheme-tertiary':'#D7E5CA',
        'lightTheme-text':'#191717',
      },
    },
  },
  darkMode:'class',
  plugins: [],
}

