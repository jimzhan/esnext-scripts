const jest = require('jest-cli');
const merge = require('deepmerge');
const settings = require('../etc/jest.config');
const { core, consts } = require('../core');

const namespace = 'jest';
const filename = 'jest.config.js';

exports.command = 'test';
exports.desc = 'run `jest` test specs';

/**
 * Format scripts under given glob pattern.
 * @param {Object} argv - `yargs` options.
 * @TODO - custom options.
 */
exports.handler = async () => {
  const options = await core.readSettings({ filename, namespace });
  const config = merge(options, settings);

  const { results } = await jest.runCLI(config, [consts.cwd]);

  process.exit(results.success ? 0 : 1);
};
