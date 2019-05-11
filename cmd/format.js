const { consts, helpers } = require('../lib')

exports.command = 'format <glob>'
exports.desc = 'format scripts found by given `glob` pattern'

/**
 * Format scripts under given glob pattern.
 * @param {String} [argv.glob] - `glob` pattern to find scripts.
 * @param {Object} argv - `yargs` options.
 */
exports.handler = argv => {
  const { glob } = argv
  const { cmd } = consts

  helpers.execute(cmd.prettier, [glob])
}
