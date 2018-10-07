const assert = require('assert')
const consts = require('../consts')
const helpers = require('./helpers')

exports.command = 'start [script]'
exports.desc = 'Process manager for production server'

const { cmd } = consts

/**
 * Start a development process with ESM supports for the given application.
 * @param {String} script - application entry to start with.
 * @param {Object} argv - `yargs` options.
 */
const startForDevelopment = (script, argv) => { // eslint-disable-line
  helpers.execute(cmd.nodemon, [
    '--inspect',
    '--require', 'esm',
    '--require', 'dotenv/config',
    script
  ])
}

/**
 * Starting the given app in cluster mode that will leverage all CPUs available .
 * @param {String} app - applicaton entry to start with.
 * @param {Object} argv - `yargs` options.
 */
const startForProduction = (script, argv) => { // eslint-disable-line
  const pm2 = require('pm2')
  const { apps } = require('../etc/process.config')
  const config = Object.assign({}, ...apps, { script })

  pm2.connect((err) => {
    if (err) {
      helpers.error(err)
      process.exit(2)
    }
    pm2.start(config, (ex) => {
      if (ex) throw ex
      pm2.disconnect()
      helpers.execute(cmd.pm2, ['list'])
    })
  })
}

/**
 * Starting the given app in
 *  - `NODE_ENV=development` - `nodemon` watch mode.
 *  - `NODE_ENV=production` - cluster mode that will leverage all CPUs available .
 * @param {String} app - applicaton entry to start with.
 * @param {Object} argv - `yargs` options.
 */
exports.handler = (argv) => {
  const { script } = argv
  assert(script, '[script] is missing')
  if (process.env.NODE_ENV === 'production') {
    startForProduction(script, argv)
  } else {
    startForDevelopment(script, argv)
  }
}
