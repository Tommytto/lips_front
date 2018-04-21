const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const dir = require('./dir');

module.exports = merge(webpackConfig, {
  devtool: 'eval',
  devServer: {
    compress: false,
    contentBase: dir.public,
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 8001,
  },
  output: {
    pathinfo: true,
    publicPath: '/',
    path: dir.build,
    filename: '[name].min.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
