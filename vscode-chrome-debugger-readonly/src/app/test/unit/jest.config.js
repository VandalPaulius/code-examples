const reactConfig = require('@brando/shared/test/react.jest.config')

module.exports = {
  ...reactConfig,
  rootDir: __dirname,
  displayName: 'app',
}
