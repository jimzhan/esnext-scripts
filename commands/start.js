const helpers = require('./helpers')


exports.command = 'start <script>'
exports.desc = 'Start the application script'

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
  // @TODO Switch to pm2 once the `gkt` issue solved.
  // const cpus = os.cpus().length
  helpers.execute('node', [
    '--require', 'esm',
    script,
  ])
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
