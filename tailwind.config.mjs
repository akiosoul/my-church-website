// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.astro',
      './src/**/*.jsx',
      './src/**/*.tsx',
      './src/**/*.js',
      './src/**/*.ts',
      './src/styles/global.css',
    ],
    theme: {
      extend: {
        // custom theme values go here
      },
    },
    plugins: [],
  };
  