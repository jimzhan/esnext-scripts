const { CLIEngine } = require('eslint')
const helpers = require('./helpers')


/**
 * Perform linting via `eslint` API.
 * @param {String} dir - directory to perform linting.
 * @param {Object} argv - `yargs` options.
 */
const lintFromApi = (dir, argv) => { // eslint-disable-line
  const options = require('../.eslintrc') // eslint-disable-line
  const eslint = new CLIEngine(Object.assign({
    fix: !!argv.fix, // @FIXME doesn't really work.
    extensions: ['.js', '.jsx'],
  }, options))
  const { log } = console
  const { results } = eslint.executeOnFiles([dir])
  const formatter = eslint.getFormatter('stylish')
  const output = formatter(results)
  if (output) log(output)
  helpers.info(`--fix ${argv.fix}`)
}

/**
 * Execute `eslint` from CLI.
 * @param {String} dir - directory to perform linting.
 * @param {Object} argv - `yargs` options.
 */
const lintFromCli = (dir, argv) => { // eslint-disable-line
  const args = [
    dir,
    '--ext', '.js,jsx',
    '--config', require.resolve('../.eslintrc'),
  ]
  if (argv.fix) args.push('--fix')
  if (argv.fixDryRun) args.push('--fix-dry-run')
  helpers.execute(require.resolve('eslint/bin/eslint'), args)
}
