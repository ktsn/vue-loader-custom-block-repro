const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.vue/,
        include: path.resolve('src'),
        use: [
          'cache-loader',
          'vue-loader'
        ]
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
}