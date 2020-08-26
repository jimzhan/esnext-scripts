const fs = require('fs');
const path = require('path');
const pkgConf = require('pkg-conf');
const execa = require('execa');
const symbols = require('log-symbols');

const debug = require('debug')('esnext');
const pkg = require('../package.json');
const consts = require('./consts');

const info = (message) => debug(`${symbols.info} ${message}`);
const success = (message) => debug(`${symbols.success} ${message}`);
const warning = (message) => debug(`${symbols.warning} ${message}`);
const error = (message) => debug(`${symbols.error} ${message}`);

/**
 * Execute system command.
 *
 * @param {string} cmd - command to be executed
 * @param {array} args - list of command arguments.
 * @param {object} options - command options.
 */
const execute = (cmd, args, options = {}) =>
  execa.sync(cmd, args, { ...options, stdio: 'inherit' });

/**
 * Fetch settings from given file name (.js) and package.json#namespace.
 * 1. If file with the given name found, simply require it & return its values.
 * 2. If file not found, return package.json#namespace values.
 * 3. If namespace it also missing, return {}.
 * @param {String} [options.filename] - file to read under `cwd`.
 * @param {String} [options.namespace] - namespace to lookup in package.json under `cwd`.
 * */
const readSettings = async (options = {}) => {
  let settings = {};
  const cwd = options.cwd || consts.cwd;
  const { filename, namespace } = options;
  const config = filename ? path.resolve(cwd, filename) : null;

  // eslint-disable-next-line security/detect-non-literal-fs-filename
  if (config && fs.existsSync(config)) {
    // eslint-disable-next-line
    settings = require(config);
  } else if (namespace) {
    settings = await pkgConf(namespace);
  }

  return settings;
};

module.exports = {
  pkg,
  debug,
  info,
  success,
  warning,
  error,
  execute,
  readSettings,
};
