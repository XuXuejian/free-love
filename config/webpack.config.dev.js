const merge = require('webpack-merge')
const base = require('./webpack.config.base.js')
const path = require('path')

module.exports = merge(base, {
  mode: 'development',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 2,
          enforce: true,
        },
      },
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    proxy: {
      '/portal/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/portal': '',
        },
      },
    },
    historyApiFallback: true,
    port: 9000,
    hot: true,
  },
})
