const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'
const devPlugins = devMode
  ? [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()]
  : []

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    chunkFilename: '[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'react-dom': devMode ? '@hot-loader/react-dom' : 'react-dom',
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  devtool: devMode ? 'inline-source-map' : '',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...devPlugins,
    new HtmlWebpackPlugin({
      title: '福原爱',
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
}
