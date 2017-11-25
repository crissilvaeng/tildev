// webpack.dev.js

const path = require('path')
const merge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common')
const settings = require('./settings')

const config = merge(common, {
  devServer: {
    contentBase: settings.dist,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(settings.template, 'index.html'),
      title: 'Today I Learned',
      hash: true,
      favicon: path.resolve(settings.template, 'favicon.ico')
    })
  ]
})

module.exports = config
