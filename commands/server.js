const assert = require('assert')
const helpers = require('./helpers')


exports.command = 'server <action> [script]'
exports.desc = 'Process manager for production server'

const commands = {
  /* eslint-disable global-require */
  pm2: require.resolve('pm2/bin/pm2'),
  nodemon: require.resolve('nodemon/bin/nodemon'),
  /* eslint-enable */
}

/**
 * Merge process settings for `pm2`.
 */
const getProcessSettings = () => {
  const { apps } = require('../etc/process.config') // eslint-disable-line
  return Object.assign({}, ...apps)
}

/**
 * Start a development process with ESM supports for the given application.
 * @param {String} script - application entry to start with.
 * @param {Object} argv - `yargs` options.
 */
const startForDevelopment = (script, argv) => { // eslint-disable-line
  helpers.execute(commands.nodemon, [
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
  /* eslint-disable global-require */
  const pm2 = require('pm2')
  /* eslint-enable */
  const config = Object.assign({}, getProcessSettings(), { script })

  pm2.connect((err) => {
    if (err) {
      helpers.error(err)
      process.exit(2)
    }
    pm2.start(config, (ex) => {
      if (ex) throw ex
      pm2.disconnect()
      helpers.execute(commands.pm2, ['list'])
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
const start = (script, argv) => {
  if (process.env.NODE_ENV === 'production') {
    startForProduction(script, argv)
  } else {
    startForDevelopment(script, argv)
  }
}


exports.handler = (argv) => {
  const { script } = argv
  const { error } = console
  const config = getProcessSettings()

  switch (argv.action) {
    case 'start':
      assert(script, '[script] is missing')
      start(script)
      break

    case 'stop':
      helpers.execute(commands.pm2, ['stop', config.name])
      break

    case 'list':
      helpers.execute(commands.pm2, ['list'])
      break

    case 'kill':
      helpers.execute(commands.pm2, ['kill'])
      break

    default:
      error(`unknown <action: ${argv.action}>`)
  }
}
