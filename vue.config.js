const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': path.resolve(__dirname, 'src/assets/styles')
      }
    }
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/'
    : './'
}