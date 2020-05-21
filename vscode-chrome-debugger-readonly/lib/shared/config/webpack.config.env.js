const webpack = require('webpack')
const { version } = require('../../../package.json')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({
  path: path.resolve('.env'),
})
dotenv.config({
  path: path.resolve(__dirname, '../../..', '.env'),
})

module.exports = {
  plugins: [
    new webpack.EnvironmentPlugin({
      VERSION: version,
      ...process.env,
    }),
  ],
}
