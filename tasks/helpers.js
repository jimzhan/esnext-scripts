const fs = require('fs')
const path = require('path')
const spawn = require('cross-spawn')
const symbols = require('log-symbols')

const pkg = require('../package.json')

exports.pkg = pkg
exports.debug = require('debug')(pkg.name)

exports.info = message => exports.debug(`${symbols.info} ${message}`)
exports.success = message => exports.debug(`${symbols.success} ${message}`)
exports.warning = message => exports.debug(`${symbols.warning} ${message}`)
exports.error = message => exports.debug(`${symbols.error} ${message}`)

/**
 * Execute system command.
 *
 * @param {string} cmd - command to be executed
 * @param {array} args - list of command arguments.
 * @param {object} options - command options.
 */
exports.execute = (cmd, args, options = {}) => spawn.sync(cmd, args, Object.assign({ stdio: 'inherit' }, options))

/**
 * Fetch JSON object associated with the given key from `process.cwd()/package.json` .
 * @param {String} key - settings key to fetch from `pacakge.json` (e.g. `jest`).
 */
exports.getPackageSettings = (key) => {
  let value
  const cwd = process.cwd()
  const abspath = path.resolve(cwd, 'package.json')
  if (fs.existsSync(abspath)) {
    const settings = require(abspath) // eslint-disable-line
    if (settings[key]) value = settings[key]
  }
  return value
}
