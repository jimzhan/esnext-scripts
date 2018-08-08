const path = require('path')
const plop = require('node-plop')(
  path.resolve(__dirname, 'generators', 'plopfile.js'),
)

exports.command = 'new <name>'
exports.desc = 'Create a new workspace (project)'
/**
 * Execute `eslint` linting with default settings under current `cwd`..
 * @param {Object} argv - `yargs` options.
 */
exports.handler = (argv) => {
  const { name } = argv
  const app = plop.getGenerator('new')

  app.runActions({ name }).then(() => {

  })
}
