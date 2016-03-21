module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'javascripts/vendor.js': /^(?!app)/,
        'javascripts/app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'stylesheets/app.css'}
  },

  plugins: {
    babel: {
      presets: ['es2015']
    },

    jaded: {
      jade: {
        pretty: true
      }
    },

    postcss: {
      processors: [
          require('autoprefixer')(['> 1%','last 8 versions','ie 9']),
          require('postcss-flexbugs-fixes'),
          require('postcss-flexibility'),
          require('postcss-inline-svg'),
          require('postcss-svgo')
      ]
    }
  }
};
