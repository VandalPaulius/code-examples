const merge = require('webpack-merge')
const common = require('./webpack.config.common')
const env = require('./webpack.config.env')
const images = require('./webpack.config.images')
const scripts = require('./webpack.config.scripts')
const styles = require('./webpack.config.styles')
const devServer = require('./webpack.config.devServer')
const path = require('path')
const fs = require('fs')
const { version } = require('../../../package.json')

require('dotenv').config({
  path: path.resolve(__dirname, '../../..', '.env'),
})

module.exports = config => {
  fs.mkdirSync(path.resolve(config.rootPath, 'static', version), { recursive: true })

  return merge(common(config), env, images, scripts, styles, devServer(config))
}
