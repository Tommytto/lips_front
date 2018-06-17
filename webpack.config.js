const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isProd = "production" === process.env.NODE_ENV;
const port = process.env.PORT || 8080;
const paths = {
  dist: path.resolve(__dirname, "dist"),
  public: path.resolve(__dirname, "public"),
  src: path.resolve(__dirname, "src/app")
};

const envPlugin = new Dotenv({
  safe: true,
  systemvars: true
});
const htmlPlugin = new HtmlWebPackPlugin({
  filename: "index.html",
  template: path.resolve(paths.src, "index.html")
});
const cssPlugin = new MiniCssExtractPlugin({
  chunkFilename: "[id].[chunkhash:8].min.css",
  filename: "[name].[chunkhash:8].min.css"
});

let plugins = [envPlugin, cssPlugin, htmlPlugin];

if (isProd) {
  plugins = [
    new CleanWebpackPlugin([path.resolve(paths.dist, "*")]),
    new CopyWebpackPlugin([{ from: paths.public }])
  ].concat(plugins);
}

function getCssLoader(options = {}, loaders = []) {
  return [
    isProd ? MiniCssExtractPlugin.loader : "style-loader",
    { loader: "css-loader", options },
    "postcss-loader",
    ...loaders
  ];
}

const cssLocalIdentName = isProd
  ? "[hash:base64]"
  : "[path][name]__[local]--[hash:base64:8]";

module.exports = {
  context: paths.src,
  devServer: {
    contentBase: paths.public,
    historyApiFallback: true,
    port
  },
  devtool: isProd ? "source-map" : "cheap-module-source-map",
  entry: {
    main: "./index.jsx",
    vendors: ["babel-polyfill", "whatwg-fetch"]
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: ["babel-loader"]
      },
      {
        exclude: /\.local\.css$/,
        test: /\.css$/,
        use: getCssLoader({
          importLoaders: 1,
          sourceMap: true
        })
      },
      {
        test: /\.local\.css$/,
        use: getCssLoader({
          importLoaders: 1,
          localIdentName: cssLocalIdentName,
          modules: true,
          sourceMap: true
        })
      },
      {
        exclude: /\.local\.less$/,
        test: /\.less$/,
        use: getCssLoader(
          {
            importLoaders: 2,
            sourceMap: true
          },
          ["less-loader"]
        )
      },
      {
        test: /\.local\.less$/,
        use: getCssLoader(
          {
            importLoaders: 2,
            localIdentName: cssLocalIdentName,
            modules: true,
            sourceMap: true
          },
          ["less-loader"]
        )
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "all",
          name: "vendors",
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  output: {
    chunkFilename: "[name].[chunkhash:8].min.js",
    filename: "[name].[chunkhash:8].min.js",
    publicPath: "/"
  },
  plugins,
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: [paths.src, "node_modules"]
  }
};
