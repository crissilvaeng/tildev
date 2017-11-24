// settings.js

const path = require('path')

const root = path.resolve(__dirname, '..')

const settings = {
  root,
  dist: path.resolve(root, 'dist'),
  src: path.resolve(root, 'src'),
  template: path.resolve(root, 'template')
}

module.exports = settings
