const fs = require('fs')
const path = require('path')
const assert = require('assert')
const dotenv = require('dotenv')
const consts = require('../consts')
const helpers = require('./helpers')

exports.command = 'start [script]'
exports.desc = 'Process manager for production server'
exports.option = [
  ('--env', { description: 'specify custom settings file instead default `.env` under cwd.' })
]

const { cmd } = consts

/**
 * Get optional `env` value from `argv` for custom `.env` file supports.
 * @param {String} argv.env - optional file path to custom `.env` file.
 */
const getOptionalEnv = ({ env }) => (env && typeof env === 'string') ? env : undefined

/**
 * Start a development process with ESM supports for the given application.
 * @param {String} script - application entry to start with.
 * @param {Object} argv - `yargs` options.
 */
const startForDevelopment = (script, argv) => {
  const env = getOptionalEnv(argv)
  const args = [
    '--inspect',
    '--require', 'esm',
    '--require', 'dotenv/config',
    script
  ]
  if (env) args.push(`dotenv_config_path=${env}`)
  console.log(args)
  helpers.execute(cmd.nodemon, args)
}

/**
 * Starting the given app in cluster mode that will leverage all CPUs available .
 * @param {String} app - applicaton entry to start with.
 * @param {Object} argv - `yargs` options.
 */
const startForProduction = (script, argv) => {
  const pm2 = require('pm2')
  const env = getOptionalEnv(argv)
  const { apps } = require('../etc/process.config')
  const config = Object.assign({}, ...apps, { script })
  if (env) {
    const abspath = path.resolve(env)
    if (fs.existsSync(abspath)) {
      helpers.info(`Adding additional settings from: ${env}`)
      dotenv.config({ path: abspath })
    } else {
      helpers.debug(`Invalid dotenv file: ${env}`)
    }
  }
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
