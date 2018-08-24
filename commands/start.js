const helpers = require('./helpers')

exports.command = 'start <script>'
exports.desc = 'Start an application'

/**
 * Start a development process with ESM supports for the given application.
 * @param {String} script - application entry to start with.
 * @param {Object} argv - `yargs` options.
 */
const startForDevelopment = (script, argv) => { // eslint-disable-line
  const nodemon = require.resolve('nodemon/bin/nodemon')
  helpers.execute(nodemon, [
    '--inspect',
    '--require', 'esm',
    script,
  ])
}

/**
 * Starting the given app in cluster mode that will leverage all CPUs available .
 * @param {String} app - applicaton entry to start with.
 * @param {Object} argv - `yargs` options.
 */
const startForProduction = (script, argv) => { // eslint-disable-line
  /* eslint-disable */
  const pm2 = require('pm2')
  const { apps } = require('../etc/process.config')
  /* eslint-enable */
  const config = Object.assign({}, ...apps, { script })

  pm2.connect((err) => {
    if (err) {
      helpers.error(err)
      process.exit(2)
    }
    pm2.start(config, (ex) => {
      pm2.disconnect()
      if (ex) throw ex
    })
  })
}

/**
 * Execute `eslint` linting with default settings under current `cwd`..
 * @param {Object} argv - `yargs` options.
 */
exports.handler = (argv) => {
  const { script } = argv
  if (process.env.NODE_ENV === 'production') {
    startForProduction(script, argv)
  } else {
    startForDevelopment(script, argv)
  }
}
