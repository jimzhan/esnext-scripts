const { core, consts } = require('../core');

exports.command = 'build <src> <out>';
exports.desc = 'compile an input directory of modules into an output directory';

/**
 * Execute a Node.js script with babel supports.
 * @param {String} [argv.src] - an input directory to be compiled..
 * @param {String} [argv.out] - an output directory to compile to.
 * @param {Object} argv - `yargs` options.
 */
exports.handler = (argv) => {
  const { src, out } = argv;
  const { cmd, config } = consts;
  const args = [
    src,
    '--out-dir',
    out,
    '--config-file',
    config.babel,
    '--verbose',
  ];
  core.execute(cmd.babel, args);
};
