const fs = require('fs')
const path = require('path')
const { consts, helpers } = require('../lib')

exports.command = 'exec <script>'

exports.desc = 'execute a Node.js script'

exports.builder = yargs => {
  return yargs
    .option('watch', {
      alias: 'w',
      type: 'boolean',
      description: 'watch directory "path" or files'
    })
    .option('env', {
      alias: 'e',
      type: 'string',
      description: 'file path to custom `.env` file.'
    })
}

/**
 * Execute Node.js script with ESM supports.
 * @param {String} [argv.] - Node.js script to execute.
 * @param {String} [argv.script] - Node.js script to execute.
 * @param {Object} argv - `yargs` options.
 */
exports.handler = argv => {
  const { script } = argv
  const { cmd } = consts
  const args = [
    '--require', 'esm',
    '--require', 'dotenv/config',
    script
  ]
  if (argv.env) {
    const env = path.resolve(argv.env)
    /* eslint-disable-next-line security/detect-non-literal-fs-filename */
    if (fs.existsSync(env)) {
      args.push(`dotenv_config_path=${env}`)
    }
  }
  if (argv.watch) {
    args.unshift('--inspect')
    helpers.execute(cmd.nodemon, args)
  } else {
    helpers.execute(cmd.node, args)
  }
}
