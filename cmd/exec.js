const { consts, helpers } = require('../lib')

exports.command = 'exec <script>'
exports.desc = 'execute a Node.js script (development)'
exports.builder = yargs => {
  return yargs.option('watch', {
    alias: 'w',
    type: 'boolean',
    description: 'watch directory "path" or files'
  })
}

/**
 * Execute a Node.js script with babel supports.
 * @param {String} [argv.] - Node.js script to execute.
 * @param {String} [argv.script] - Node.js script to execute.
 * @param {Object} argv - `yargs` options.
 */
exports.handler = argv => {
  const { script } = argv
  const { cmd, config } = consts

  if (argv.watch) {
    helpers.execute(
      cmd.nodemon,
      '--inspect',
      '--exec',
      cmd.babelNode,
      '--config-file',
      config.babel,
      script
    )
  } else {
    helpers.execute(cmd.babelNode, '--config-file', config.babel, script)
  }
}
