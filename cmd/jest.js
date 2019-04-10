const jest = require('jest-cli')
const config = require('../etc/jest.config')
const { consts } = require('../lib')

exports.command = 'test'
exports.desc = 'run `jest` test specs'

/**
 * Format scripts under given glob pattern.
 * @param {Object} argv - `yargs` options.
 * @TODO - custom options.
 */
exports.handler = argv => {
  jest.runCLI(
    config,
    [consts.cwd]
  ).then(results => {
    if (!results.success) {
      process.exitCode = 1
    }
  })
}
