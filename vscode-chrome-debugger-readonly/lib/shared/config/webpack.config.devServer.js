const { WebpackPluginServe: Serve } = require('webpack-plugin-serve')

module.exports = ({ serve, api, printApi }) => ({
  plugins: serve
    ? [
        new Serve(
          Object.assign(
            {
              host: '0.0.0.0',
              port: 3000,
              compress: true,
              hmr: true,
              liveReload: false,
              progress: 'minimal',
              status: true,
            },
            serve
          )
        ),
      ]
    : [],
})
