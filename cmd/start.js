const os = require('os')
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
const startForProduction = async (script, argv) => {
  const { cmd } = consts
  const instances = argv.instances || os.cpus().length

  const args = [
    'start', path.resolve(script),
    `--instances=${instances}`
  ]
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

/*
  -i --instances <number>    launch [number] of processes automatically load-balanced. Increase overall performances and performance stability.
  --secret [key]             [MONITORING] keymetrics secret key
  --public [key]             [MONITORING] keymetrics public key
  --machine-name [name]      [MONITORING] keymetrics machine name
  --raw                      raw log output
  --json                     output logs in json format
  --format                   output logs formated like key=val
  --delay <seconds>          delay start of configuration file by <seconds>
  --web [port]               launch process web api on [port] (default to 9615)
  --only <application-name>  only act on one application of configuration
  --no-auto-exit             do not exit if all processes are errored/stopped or 0 apps launched
  --env [name]               inject env_[name] env variables in process config file
  --watch                    watch and restart application on file change
  --error <path>             error log file destination (default disabled)
  --output <path>            output log file destination (default disabled)
*/
