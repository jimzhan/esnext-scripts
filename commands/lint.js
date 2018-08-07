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

exports.command = 'lint [dir]'
exports.desc = 'Start linting'
exports.option = [
  ('--fix', { description: 'Automatically fix problems' }),
  ('--fix-dry-run', { description: 'Automatically fix problems without saving the changes to the file system' }),
]

/**
 * Execute `eslint` linting with default settings under current `cwd`..
 * @param {Object} argv - `yargs` options.
 */
exports.handler = (argv) => {
  const cwd = process.cwd()
  helpers.info(`start linting => ${cwd}`)
  lintFromCli(cwd, argv)
}

/*
ESLint-CLI Basic configuration:
  --no-eslintrc                  Disable use of configuration from .eslintrc.*
  -c, --config path::String      Use this configuration, overriding .eslintrc.* config options
                                 if present
  --env [String]                 Specify environments
  --ext [String]                 Specify JavaScript file extensions - default: .js
  --global [String]              Define global variables
  --parser String                Specify the parser to be used
  --parser-options Object        Specify parser options

Specifying rules and plugins:
  --rulesdir [path::String]      Use additional rules from this directory
  --plugin [String]              Specify plugins
  --rule Object                  Specify rules

Fixing problems:
  --fix                          Automatically fix problems
  --fix-dry-run                  Automatically fix problems without saving the changes to the FS.

Ignoring files:
  --ignore-path path::String     Specify path of ignore file
  --no-ignore                    Disable use of ignore files and patterns
  --ignore-pattern [String]      Pattern of files to ignore (in addition to those in .eslintignore)

Using stdin:
  --stdin                        Lint code provided on <STDIN> - default: false
  --stdin-filename String        Specify filename to process STDIN as

Handling warnings:
  --quiet                        Report errors only - default: false
  --max-warnings Int             Number of warnings to trigger nonzero exit code - default: -1

Output:
  -o, --output-file path::String  Specify file to write report to
  -f, --format String            Use a specific output format - default: stylish
  --color, --no-color            Force enabling/disabling of color

Inline configuration comments:
  --no-inline-config             Prevent comments from changing config or rules
  --report-unused-disable-directives  Adds reported errors for unused eslint-disable directives

Caching:
  --cache                        Only check changed files - default: false
  --cache-file path::String      Path to the cache file.
                                  Deprecated: use --cache-location - default: .eslintcache
  --cache-location path::String  Path to the cache file or directory

Miscellaneous:
  --init                         Run config initialization wizard - default: false
  --debug                        Output debugging information
  -h, --help                     Show help
  -v, --version                  Output the version number
  --print-config path::String    Print the configuration for the given file
*/
