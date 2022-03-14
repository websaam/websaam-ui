module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          require('craco-plugin-scoped-css'),
        ],
      },
    },
  }