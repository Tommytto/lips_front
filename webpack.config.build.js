const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');
const path = require('path');
const dir = require('./dir');

module.exports = merge(webpackConfig, {
  devtool: 'source-map',
  output: {
    path: dir.build,
    filename: '[name].min.js',
  },

  plugins: [
    new CleanWebpackPlugin([dir.build], {
      root: path.resolve(__dirname, '..'),
      verbose: true,
    }),
  ],
});
