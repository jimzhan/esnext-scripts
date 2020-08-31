const jest = require('jest');
const merge = require('deepmerge');
const settings = require('../etc/jest.config');
const { core, consts } = require('../core');

const namespace = 'jest';
const filename = 'jest.config.js';

exports.command = 'test';
exports.desc = 'run `jest` test specs';
exports.builder = (yargs) =>
  yargs.option('dir', {
    alias: 'd',
    type: 'string',
    description: 'directory to start testing (default: cwd)',
  });

/**
 * Format scripts under given glob pattern.
 * @param {Object} argv - `yargs` options.
 * @TODO - custom options.
 */
exports.handler = async (argv) => {
  const dir = argv.dir || consts.cwd;
  const options = await core.readSettings({ filename, namespace });
  const config = merge(options, settings);

  const { results } = await jest.runCLI(config, [dir]);

  process.exit(results.success ? 0 : 1);
};
