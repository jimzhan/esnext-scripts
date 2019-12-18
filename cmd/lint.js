const { CLIEngine } = require('eslint');
const config = require('../etc/eslint.config');

/*
Sample report
{ results:
   [ { filePath: '/something.js',
       messages: [],
       errorCount: 0,
       warningCount: 0,
       fixableErrorCount: 0,
       fixableWarningCount: 0 },
       fixableWarningCount: 0 } ],
  errorCount: 0,
  warningCount: 0,
  fixableErrorCount: 0,
  fixableWarningCount: 0,
  usedDeprecatedRules: [ { ruleId: 'no-negated-in-lhs', replacedBy: [Array] } ] }
*/

exports.command = 'lint [dir]';
exports.desc = 'start linting using pre-defined rules set';

/**
 * Execute `eslint` linting with default settings under current `cwd`..
 * @param {String} [argv.dir] - directory to perform linting.
 * @param {Object} argv - `yargs` options.
 */
exports.handler = (argv) => {
  const dir = argv.dir || process.cwd();

  const fix = argv.fix === true;
  const eslint = new CLIEngine(
    {
      fix,
      extensions: ['.js', '.jsx'],
      ...config,
    },
  );

  const report = eslint.executeOnFiles([dir]);
  const output = eslint.getFormatter('stylish')(report.results);

  if (output) console.log(output); // eslint-disable-line no-console
  if (fix) CLIEngine.outputFixes(report);

  const hasUnfixableError = output.errorCount > output.fixableErrorCount;
  const hasUnfixableWarning = output.warningCount > output.fixableWarningCount;

  if (hasUnfixableError || hasUnfixableWarning) {
    process.exitCode = 1;
  }
};
