const webpack = require('webpack')
const { mergeProduction, mergeDevelopment } = require('./config/mergeDefaultOptions')

const displayOutput = (err, stats) => {
  if (err) {
    return console.error(err)
  }

  console.log(
    stats.toString({
      assets: true,
      cached: false,
      children: false,
      chunks: false,
      chunkModules: false,
      colors: true,
      hash: true,
      modules: false,
      reasons: false,
      source: false,
      timings: true,
      version: true,
    })
  )
}

const build = (configFile, options) => {
  process.env.NODE_ENV = 'production'
  options = mergeProduction(options)

  let config = require(configFile)(options)

  webpack(config, displayOutput)
}

const watch = (configFile, options) => {
  process.env.NODE_ENV = 'development'
  options = mergeDevelopment(options)

  let config = require(configFile)(options)

  config.entry.app.push('webpack-plugin-serve/client')

  webpack(config).watch({}, displayOutput)
}

module.exports = { build, watch }
