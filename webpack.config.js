const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const srcPath = './src/';

const webpackConfig = {
  entry: {
    index: srcPath + 'js/index.js'
    // dragAndDrop: srcPath + 'views/dragAndDrog/index.js' // 今后这本基本不需要手动写了，都交由下边文件读取
  },

  output: {
    filename: '[name].bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets'
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
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunks: ['index']
    })
  ],
  devServer: {
    contentBase: './dist'
  },
};

function getEntries(globPath) {
  var files = glob.sync(globPath),
      entries = {};

  files.forEach(function(filepath) {
    // 取倒数第二层(views下面的文件夹)做包名
    var split = filepath.split('/');
    var name = split[split.length - 2];

    entries[name] = './' + filepath;
  });

  return entries;
}

var entries = getEntries(srcPath + 'views/**/index.js');

Object.keys(entries).forEach(function(name) {
  // 每个页面生成一个entry，如果需要HotUpdate，在这里修改entry
  webpackConfig.entry[name] = entries[name];

  // 每个页面生成一个html
  var plugin = new HtmlWebpackPlugin({
    // 生成出来的html文件名
    filename: name + '.html',
    // 每个html的模版，这里多个页面使用同一个模版
    template: 'src/index.html',
    // 自动将引用插入html
    inject: true,
    // 每个html引用的js模块，也可以在这里加上vendor等公用模块
    chunks: [name]
  });
  webpackConfig.plugins.push(plugin);
});

module.exports = webpackConfig;