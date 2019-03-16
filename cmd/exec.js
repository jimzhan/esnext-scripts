const { consts, helpers } = require('../lib')

exports.command = 'exec <script>'
exports.desc = 'execute a Node.js script'

/**
 * Execute a Node.js script with babel supports.
 * @param {String} [argv.script] - Node.js script to execute.
 * @param {Object} argv - `yargs` options.
 */
exports.handler = argv => {
  const { script } = argv
  const { cmd, config } = consts

  helpers.execute(cmd.babelNode, '--config-file', config.babel, script)
}
