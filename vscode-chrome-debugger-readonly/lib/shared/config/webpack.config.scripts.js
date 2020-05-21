const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: [
          {
            loader: 'ejs-webpack-loader',
            options: {
              htmlmin: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: require('./.babelrc.js'),
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
}
