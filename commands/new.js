const path = require('path')
const ora = require('ora')
const plop = require('node-plop')(
  path.resolve(__dirname, 'generators', 'plopfile.js')
)

exports.command = 'new <name>'
exports.desc = 'Create a new workspace (project)'

/**
 * @param {Object} argv - `yargs` options.
 */
exports.handler = (argv) => {
  const { name } = argv
  const app = plop.getGenerator('new')

  const spinner = ora('Start creating new workspace').start()
  app.runActions({ name }).then(() => {
    // @TODO results based display.
    spinner.succeed(`workspace <${name}> has been created`)
  })
}
