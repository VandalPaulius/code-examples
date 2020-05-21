const { version } = require('../../../package.json')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: `${version}/static`,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: devMode,
            },
          },
        ],
      },
    ],
  },
}
