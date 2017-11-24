// webpack.prod.js

const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const common = require('./webpack.common')
const settings = require('./settings')

const config = merge(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CleanWebpackPlugin('./dist', {
      root: settings.root
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(settings.template, 'index.html'),
      title: 'Today I Learned',
      hash: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } }
    })
  ]
})

module.exports = config
