const { core, consts } = require('../core');

exports.command = 'run <script>';

exports.desc = 'execute a Node.js script with Babel supports';

exports.builder = (yargs) =>
  yargs
    .option('watch', {
      alias: 'w',
      type: 'boolean',
      description: 'watch directory "path" or files',
    })
    .option('env', {
      alias: 'e',
      type: 'string',
      description: 'file path to custom `.env` file.',
    });

/**
 * Execute Node.js script with Babel supports.
 * @param {String} [argv.] - Node.js script to execute.
 * @param {String} [argv.script] - Node.js script to execute.
 * @param {Object} argv - `yargs` options.
 */
exports.handler = (argv) => {
  const { script } = argv;
  const { cmd, config } = consts;
  const args = ['--config-file', config.babel, '--extensions', '.js,.jsx,.ts,.tsx', script];

  if (argv.watch) {
    core.execute(cmd.nodemon, ['--exec', cmd.babelNode, ...args]);
  } else {
    core.execute(cmd.babelNode, args);
  }
};
