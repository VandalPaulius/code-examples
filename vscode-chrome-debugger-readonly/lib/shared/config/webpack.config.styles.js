const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { version } = require('../../../package.json')

const devMode = process.env.NODE_ENV !== 'production'

const cssWithModules = [
  {
    loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
  },
  {
    loader: 'css-loader',
    options: {
      url: false,
      import: false,
      sourceMap: true,
      modules: {
        localIdentName: devMode ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
      },
      importLoaders: 3,
      localsConvention: 'dashes',
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      sourceMap: true,
      plugins: loader => [require('autoprefixer')(), require('cssnano')()],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      prependData: `$static-root: "/${version}/";`,
    },
  },
  {
    loader: 'sass-resources-loader',
    options: {},
  },
]

const cssWithoutModules = cssWithModules.map(o =>
  o.loader === 'css-loader' ? { ...o, options: { ...o.options, modules: false } } : o
)

const config = {
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /(global|global\/index|node_modules\/.*)\.(sa|sc|c)ss$/,
            use: cssWithoutModules,
          },
          {
            test: /\.(sa|sc|c)ss$/,
            exclude: /node_modules/,
            use: cssWithModules,
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${version}/app.css`,
      chunkFilename: `${version}/app.[id].css`,
      ignoreOrder: true,
    }),
  ],
}

if (!devMode) {
  config.optimization = {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
        // this creates an empty js file in the output. This is a bug which should go away in Webpack 5
        // https://github.com/webpack/webpack/issues/7300
        styles: {
          chunks: 'all',
          minChunks: 1,
          name: 'styles',
          test: /\.(sa|sc|c)ss$/,
          priority: 1000,
        },
      },
    },
  }
}

module.exports = config
