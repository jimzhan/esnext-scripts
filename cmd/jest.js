const jest = require('jest-cli')
const merge = require('deepmerge')
const { consts, helpers } = require('../lib')

const filename = 'jest.config.js'
const namespace = 'jest'

exports.command = 'test'
exports.desc = 'run `jest` test specs'

/**
 * Format scripts under given glob pattern.
 * @param {Object} argv - `yargs` options.
 * @TODO - custom options.
 */
exports.handler = async argv => {
  const options = await helpers.readSettings({ filename, namespace })
  const config = merge(options, require('../etc/jest.config'))

  const { results } = await jest.runCLI(config, [consts.cwd])

  process.exit(results.success ? 0 : 1)
}
