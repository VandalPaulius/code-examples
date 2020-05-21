const reactConfig = require('@brando/shared/test/react.jest.config')
const puppeteerConfig = require('@brando/shared/test/puppeteer.jest.config')

module.exports = {
  ...reactConfig,
  ...puppeteerConfig,
  rootDir: __dirname,
  displayName: 'app-e2e',
}
