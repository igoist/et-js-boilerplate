const path = require('path');
const webpack = require('webpack');

const srcPath = './src/';

module.exports = {
  entry: {
    index: srcPath + 'js/index.js'
  },

  output: {
    filename: '[name].bundle.min.js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: path.join(__dirname, srcPath + 'js')
      },
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};