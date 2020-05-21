const chokidar = require('chokidar')
const { mergeDevelopment } = require('@brando/shared/config/mergeDefaultOptions')

module.exports = options => {
  options = mergeDevelopment(options)

  // var app = require('./app')(options).listen(options.serve.port)

  chokidar.watch(__dirname, { ignoreInitial: true }).on('all', (event, path) => {
    Object.keys(require.cache).forEach(id => {
      if (id.includes(__dirname) || id.includes(options.publicPath)) {
        delete require.cache[id]
      }
    })

    // app.server.close()
    // app = require('./app')(options).listen(options.serve.port)
  })
}
