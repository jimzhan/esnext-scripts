const { core, consts } = require('../core');

exports.command = 'format [--watch -w] <glob>';
exports.desc = 'format scripts found by given `glob` pattern';

exports.builder = (yargs) =>
  yargs.option('write', {
    alias: 'w',
    type: 'boolean',
    description: 'rewrites all processed files in place.',
  });

/**
 * Format scripts under given glob pattern.
 * @param {String} [argv.glob] - `glob` pattern to find scripts.
 * @param {Object} argv - `yargs` options.
 */
exports.handler = (argv) => {
  const { glob } = argv;
  const { cmd } = consts;
  const mode = argv.write ? '--write' : '--check';

  try {
    core.execute(cmd.prettier, ['--config', mode, glob]);
  } catch (ex) {
    core.error(ex.message);
  }
};
