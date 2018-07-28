const spawn = require('cross-spawn')
const pkg = require('../package.json')

exports.pkg = pkg

exports.debug = require('debug')(pkg.name)

/**
 * Execute system command.
 *
 * @param {string} cmd - command to be executed
 * @param {array} args - list of command arguments.
 * @param {object} options - command options.
 */
exports.execute = (cmd, args, options = {}) => spawn.sync(cmd, args, Object.assign({ stdio: 'inherit' }, options))
