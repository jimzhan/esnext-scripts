const helpers = require('./helpers')

exports.command = 'exec <script>'
exports.desc = 'execute a Node.js script'

/**
 * Execute a Node.js script with ESM supports.
 * @param {String} [argv.script] - Node.js script to execute.
 * @param {Object} argv - `yargs` options.
 */
exports.handler = (argv) => {
  const { script } = argv
  helpers.execute('node', [
    '--require', 'esm',
    script
  ])
}
