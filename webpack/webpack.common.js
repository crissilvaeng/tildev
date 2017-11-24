// webpack.common.js

const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const pkg = require('./../package.json')
const settings = require('./settings')

const config = {
  entry: {
    app: path.resolve(settings.src, 'index.js'),
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: settings.dist,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }, 'sass-loader' ]
        })
      }
    ]
  },
  resolve: {
    modules: [settings.src, 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ]
}

module.exports = config
