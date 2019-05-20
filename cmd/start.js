const path = require('path')
const { consts, helpers } = require('../lib')

exports.command = 'start <script>'

exports.desc = 'start a script (NODE_ENV=development) or `ecosystem.config.js` (NODE_ENV=production)'

exports.builder = yargs => {
  return yargs
    .option('env', {
      alias: 'e',
      type: 'string',
      description: 'file path to custom `.env` file.'
    })
}

/**
 * Start a development process with ESM supports for the given application.
 * @param {String} script - application entry to start with.
 * @param {Object} argv - `yargs` options.
 */
const startForDevelopment = async (script, argv) => {
  const { cmd } = consts
  const args = [
    '--inspect',
    '--require', 'esm',
    '--require', 'dotenv/config',
    script
  ]
  if (argv.env) args.push(`dotenv_config_path=${path.resolve(argv.env)}`)
  helpers.execute(cmd.nodemon, args)
}

/**
 * Starting the given app in cluster mode that will leverage all CPUs available .
 * @param {String} app - applicaton entry to start with.
 * @param {Object} argv - `yargs` options.
 */
const startForProduction = async (config, argv) => {
  const { cmd } = consts
  const args = [ 'start', path.resolve(config) ]
  helpers.execute(cmd.pm2, args)
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
  if (process.env.NODE_ENV === 'production') {
    startForProduction(script, argv)
  } else {
    startForDevelopment(script, argv)
  }
}
