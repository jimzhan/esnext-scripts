const os = require('os')
const pm2 = require('pm2')
const helpers = require('./helpers')



exports.command = 'start <script>'
exports.desc = 'Start the application script'

/**
 * Start a development process with ESM supports for the given application.
 * @param {String} script - application entry to start with.
 * @param {Object} argv - `yargs` options.
 */
const startForDevelopment = (script, argv) => { // eslint-disable-line
  const args = [
    script,
    '-r', 'esm',
  ]
  helpers.execute('node', args)
}

/**
 * Starting the given app in cluster mode that will leverage all CPUs available .
 * @param {String} app - applicaton entry to start with.
 * @param {Object} argv - `yargs` options.

 */
const startForProduction = (script, argv) => { // eslint-disable-line
  const cpus = os.cpus().length

  pm2.connect((err) => {
    if (err) {
      helpers.error(err)
      process.exit(2)
    }
    pm2.start({
      script,
      exec_mode: 'cluster',
      instances: cpus,
      max_memory_restart: '100M',
      node_args: '-r esm',
    }, (error) => {
      pm2.disconnect()
      if (error) throw error
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
