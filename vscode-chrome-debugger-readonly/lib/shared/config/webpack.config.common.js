const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { version } = require('../../../package.json')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = ({ rootPath, html, output = {}, name, copy = [] }) => ({
  devtool: devMode ? 'eval-source-map' : 'nosources-source-map',
  context: rootPath,
  mode: devMode ? 'development' : 'production',
  entry: {
    app: ['./index.js'],
  },
  output: Object.assign(
    {
      path: path.join(rootPath, 'static'),
      filename: `${version}/[name].js`,
      chunkFilename: `${version}/[name].bundle.js`,
      publicPath: '/',
    },
    output
  ),
  resolve: {
    extensions: ['.js', '.ejs', '.jst.ejs', '.jsx', '.scss', '.css'],
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.join(rootPath, 'static'),
    }),
    new HtmlWebpackPlugin(
      Object.assign(
        {
          cache: false,
          template: path.resolve(__dirname, '..', 'views/index.ejs.html'),
          templateParameters: {
            title: name || 'VSCode Chrome repro',
            version,
          },
        },
        html
      )
    ),
    new CopyWebpackPlugin(copy, {
      copyUnmodified: true,
    }),
  ],
  externals: {
    fs: '{}',
  },
  optimization: {
    runtimeChunk: {
      name: 'app',
    },
    usedExports: true,
  },
})
