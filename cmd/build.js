const { consts, helpers } = require('../lib')

exports.command = 'build <src> <out>'
exports.desc = 'compile an input directory of modules into an output directory'

/**
 * Execute a Node.js script with babel supports.
 * @param {String} [argv.src] - an input directory to be compiled..
 * @param {String} [argv.out] - an output directory to compile to.
 * @param {Object} argv - `yargs` options.
 */
exports.handler = argv => {
  const { src, out } = argv
  const { cmd, config } = consts
  helpers.execute(
    cmd.babel,
    src,
    '--out-dir',
    out,
    '--config-file',
    config.babel,
    '--verbose'
  )
}

/*
Usage: babel [options] <files ...>

Options:
  -f, --filename [filename]                   filename to use when reading from stdin - this will be used in source-maps, errors etc
  --presets [list]                            comma-separated list of preset names
  --plugins [list]                            comma-separated list of plugin names
  --config-file [path]                        Path to a .babelrc file to use
  --env-name [name]                           The name of the 'env' to use when loading configs and plugins. Defaults to the value of BABEL_ENV, or else NODE_ENV, or else 'development'.
  --root-mode [mode]                          The project-root resolution mode. One of 'root' (the default), 'upward', or 'upward-optional'.
  --source-type [script|module]
  --no-babelrc                                Whether or not to look up .babelrc and .babelignore files
  --ignore [list]                             list of glob paths to **not** compile
  --only [list]                               list of glob paths to **only** compile
  --no-highlight-code                         enable/disable ANSI syntax highlighting of code frames (on by default)
  --no-comments                               write comments to generated output (true by default)
  --retain-lines                              retain line numbers - will result in really ugly code
  --compact [true|false|auto]                 do not include superfluous whitespace characters and line terminators
  --minified                                  save as much bytes when printing [true|false]
  --auxiliary-comment-before [string]         print a comment before any injected non-user code
  --auxiliary-comment-after [string]          print a comment after any injected non-user code
  -s, --source-maps [true|false|inline|both]
  --source-map-target [string]                set `file` on returned source map
  --source-file-name [string]                 set `sources[0]` on returned source map
  --source-root [filename]                    the root from which all sources are relative
  --module-root [filename]                    optional prefix for the AMD module formatter that will be prepend to the filename on module definitions
  -M, --module-ids                            insert an explicit id for modules
  --module-id [string]                        specify a custom name for module ids
  -x, --extensions [extensions]               List of extensions to compile when a directory has been input [.es6,.js,.es,.jsx,.mjs]
  --keep-file-extension                       Preserve the file extensions of the input files
  -w, --watch                                 Recompile files on changes
  --skip-initial-build                        Do not compile files before watching
  -o, --out-file [out]                        Compile all input files into a single file
  -d, --out-dir [out]                         Compile an input directory of modules into an output directory
  --relative                                  Compile into an output directory relative to input directory or file. Requires --out-dir [out]
  -D, --copy-files                            When compiling a directory copy over non-compilable files
  --include-dotfiles                          Include dotfiles when compiling and copying non-compilable files
  --verbose                                   Log everything
  --delete-dir-on-start                       Delete the out directory before compilation
  -V, --version                               output the version number
  -h, --help                                  output usage information
*/
