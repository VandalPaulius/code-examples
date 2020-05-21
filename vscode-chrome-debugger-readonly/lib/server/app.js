const polka = require('polka')
const sirv = require('sirv')
const proxy = require('http-proxy-middleware')

const getProxy = (config, name, options = {}) => {
  const proxy = {
    target: config[name],
    changeOrigin: true,
    logLevel: config.logLevel,
  }

  if (options.pathRewrite) {
    proxy.pathRewrite = options.pathRewrite
  }

  return proxy
}

module.exports = config =>
  polka()
    .use(sirv(config.publicPath))
    .get('/ping', (req, res) => {
      res.end('pong')
    })
