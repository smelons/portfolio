'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeSassMagicImporter = require('node-sass-magic-importer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV;
const sourceMap = env === 'development';
const minify = env === 'production';

const config = {
  entry: path.join(__dirname, 'src', 'main.js'),
  mode: env,
  output: {
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      // Must be specified for HtmlWebpackPlugin to work correctly.
      // See: https://github.com/jantimon/html-webpack-plugin/issues/882
      chunks: 'all',
    },
  },
  devtool: sourceMap ? 'cheap-module-eval-source-map' : undefined,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              importer: nodeSassMagicImporter(),
              sourceMap,
            },
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'index.html'),
      template: path.join(__dirname, 'src', 'index.html'),
      inject: true,
      minify: minify ? {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true
      } : false,
    }),
  ],
};

if (minify) {
  config.optimization.minimizer = [
    new OptimizeCSSAssetsPlugin(),
    // Enabled by default in production mode if
    // the `minimizer` option isn't overridden.
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
    }),
  ];
}

module.exports = config;