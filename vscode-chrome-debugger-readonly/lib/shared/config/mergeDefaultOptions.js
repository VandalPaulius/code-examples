const yargs = require('yargs')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({
  path: path.resolve('.env'),
})
dotenv.config({
  path: path.resolve(__dirname, '../../..', '.env'),
})

const mergeProduction = options => {
  return { html: {}, serve: {}, ...options }
}

const mergeDevelopment = options => {
  options = mergeProduction(options)

  options.serve.port = yargs.argv.p || 3001
  options.api = yargs.argv.api || process.env.API
  options.printApi = yargs.argv.printApi || process.env.PRINT_API

  return options
}

module.exports = {
  mergeDevelopment,
  mergeProduction,
}
