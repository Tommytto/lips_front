const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const dir = require('./dir');

// Is the current build a development build
const IS_DEV = process.env.NODE_ENV === 'dev';

/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    vendors: [
      'babel-polyfill',
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router',
      'react-router-dom',
    ],
    index: path.join(dir.src, 'app/index'),
  },
  resolve: {
    modules: [dir.node, dir.src, dir.public],
    extensions: ['*', '.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV,
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: path.resolve(dir.public, './index.html'),
      hash: true,
      inject: true,
      production: !IS_DEV,
      template: path.resolve(dir.src, 'index.html'),
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },

      // BABEL
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true,
        },
      },

      // // STYLES
      // {
      //   test: /\.css$/,
      //   use: [
      //     IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: IS_DEV,
      //       },
      //     },
      //   ],
      // },

      // CSS / SASS
      {
        test: /\.(scss|css)$/,
        use: [
          IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV,
              includePaths: [dir.build],
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },

      // IMAGES
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
};
