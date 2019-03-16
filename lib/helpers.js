const fs = require('fs')
const path = require('path')
const execa = require('execa')
const symbols = require('log-symbols')
const { cwd } = require('./consts')

const pkg = require('../package.json')
const debug = require('debug')(pkg.name)

const info = message => exports.debug(`${symbols.info} ${message}`)
const success = message => exports.debug(`${symbols.success} ${message}`)
const warning = message => exports.debug(`${symbols.warning} ${message}`)
const error = message => exports.debug(`${symbols.error} ${message}`)

/**
 * Execute system command.
 *
 * @param {string} cmd - command to be executed
 * @param {array} args - list of command arguments.
 * @param {object} options - command options.
 */
const execute = (cmd, ...args) =>
  execa.sync(cmd, [...args], Object.assign({ stdio: 'inherit' }))

/**
 * Fetch JSON object associated with the given key from `process.cwd()/package.json` .
 * @param {String} key - settings key to fetch from `pacakge.json` (e.g. `jest`).
 */
const getPackageSettings = key => {
  let value
  const abspath = path.resolve(cwd, 'package.json')
  if (fs.existsSync(abspath)) {
    const settings = require(abspath) // eslint-disable-line
    if (settings[key]) value = settings[key]
  }
  return value
}

module.exports = {
  pkg,
  debug,
  info,
  success,
  warning,
  error,
  execute,
  getPackageSettings
}
