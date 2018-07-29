const helpers = require('./helpers')
/*
Usage: jest [--config=<pathToConfigFile>] [TestPathPattern]

Options:
  --help, -h                      Show help                            [boolean]
  --version, -v                   Print the version and exit           [boolean]
  --all                           The opposite of `onlyChanged`. If
                                  `onlyChanged` is set by default, running jest
                                  with `--all` will force Jest to run all tests
                                  instead of running only tests related to
                                  changed files.
  --automock                      Automock all files by default.       [boolean]
  --bail, -b                      Exit the test suite immediately upon the first
                                  failing test.                        [boolean]
  --browser                       Respect the "browser" field in package.json
                                  when resolving modules. Some packages export
                                  different versions based on whether they are
                                  operating in node.js or a browser.   [boolean]
  --cache                         Whether to use the transform cache. Disable
                                  the cache using --no-cache.          [boolean]
  --cacheDirectory                The directory where Jest should store its
                                  cached  dependency information.       [string]
  --changedFilesWithAncestor      Runs tests related to the current changes and
                                  the changes made in the last commit. Behaves
                                  similarly to `--onlyChanged`.        [boolean]
  --changedSince                  Runs tests related the changes since the
                                  provided branch. If the current branch has
                                  diverged from the given branch, then only
                                  changes made locally will be tested. Behaves
                                  similarly to `--onlyChanged`.         [string]
  --ci                            Whether to run Jest in continuous integration
                                  (CI) mode. This option is on by default in
                                  most popular CI environments. It will  prevent
                                  snapshots from being written unless explicitly
                                  requested.          [boolean] [default: false]
  --clearCache                    Clears the configured Jest cache directory and
                                  then exits. Default directory can be found by
                                  calling jest --showConfig            [boolean]
  --clearMocks                    Automatically clear mock calls and instances
                                  between every test. Equivalent to calling
                                  jest.clearAllMocks() between each test.
                                                                       [boolean]
  --collectCoverage               Alias for --coverage.                [boolean]
  --collectCoverageFrom           A glob pattern relative to <rootDir> matching
                                  the files that coverage info needs to be
                                  collected from.                       [string]
  --collectCoverageOnlyFrom       Explicit list of paths coverage will be
                                  restricted to.                         [array]
  --color                         Forces test results output color highlighting
                                  (even if stdout is not a TTY). Set to false if
                                  you would like to have no colors.    [boolean]
  --colors                        Alias for `--color`.                 [boolean]
  --config, -c                    The path to a jest config file specifying how
                                  to find and execute tests. If no rootDir is
                                  set in the config, the current directory is
                                  assumed to be the rootDir for the project.
                                  This can also be a JSON encoded value which
                                  Jest will use as configuration.       [string]
  --coverage                      Indicates that test coverage information
                                  should be collected and reported in the
                                  output.                              [boolean]
  --coverageDirectory             The directory where Jest should output its
                                  coverage files.                       [string]
  --coveragePathIgnorePatterns    An array of regexp pattern strings that are
                                  matched against all file paths before
                                  executing the test. If the file pathmatches
                                  any of the patterns, coverage information will
                                  be skipped.                            [array]
  --coverageReporters             A list of reporter names that Jest uses when
                                  writing coverage reports. Any istanbul
                                  reporter can be used.                  [array]
  --coverageThreshold             A JSON string with which will be used to
                                  configure minimum threshold enforcement for
                                  coverage results                      [string]
  --debug                         Print debugging info about your jest config.
                                                                       [boolean]
  --detectLeaks                   **EXPERIMENTAL**: Detect memory leaks in
                                  tests. After executing a test, it will try to
                                  garbage collect the global object used, and
                                  fail if it was leaked
                                                      [boolean] [default: false]
  --detectOpenHandles             Print out remaining open handles preventing
                                  Jest from exiting at the end of a test run.
                                                      [boolean] [default: false]
  --env                           The test environment used for all tests. This
                                  can point to any file or node module.
                                  Examples: `jsdom`, `node` or
                                  `path/to/my-environment.js`           [string]
  --errorOnDeprecated             Make calling deprecated APIs throw helpful
                                  error messages.     [boolean] [default: false]
  --expand, -e                    Use this flag to show full diffs instead of a
                                  patch.                               [boolean]
  --filter                        Path to a module exporting a filtering
                                  function. This method receives a list of tests
                                  which can be manipulated to exclude tests from
                                  running. Especially useful when used in
                                  conjunction with a testing infrastructure to
                                  filter known broken tests.            [string]
  --findRelatedTests              Find related tests for a list of source files
                                  that were passed in as arguments. Useful for
                                  pre-commit hook integration to run the minimal
                                  amount of tests necessary.           [boolean]
  --forceExit                     Force Jest to exit after all tests have
                                  completed running. This is useful when
                                  resources set up by test code cannot be
                                  adequately cleaned up.               [boolean]
  --globalSetup                   The path to a module that runs before All
                                  Tests.                                [string]
  --globalTeardown                The path to a module that runs after All
                                  Tests.                                [string]
  --globals                       A JSON string with map of global variables
                                  that need to be available in all test
                                  environments.                         [string]
  --haste                         A JSON string with map of variables for the
                                  haste module system                   [string]
  --init                          Generate a basic configuration file  [boolean]
  --json                          Prints the test results in JSON. This mode
                                  will send all other test output and user
                                  messages to stderr.                  [boolean]
  --lastCommit                    Run all tests affected by file changes in the
                                  last commit made. Behaves similarly to
                                  `--onlyChanged`.                     [boolean]
  --listTests                     Lists all tests Jest will run given the
                                  arguments and exits. Most useful in a CI
                                  system together with `--findRelatedTests` to
                                  determine the tests Jest will run based on
                                  specific files      [boolean] [default: false]
  --logHeapUsage                  Logs the heap usage after every test. Useful
                                  to debug memory leaks. Use together with
                                  `--runInBand` and `--expose-gc` in node.
                                                                       [boolean]
  --mapCoverage                   Maps code coverage reports against original
                                  source code when transformers supply source
                                  maps.

                                  DEPRECATED                           [boolean]
  --maxWorkers, -w                Specifies the maximum number of workers the
                                  worker-pool will spawn for running tests. This
                                  defaults to the number of the cores available
                                  on your machine. (its usually best not to
                                  override this default)                [number]
  --moduleDirectories             An array of directory names to be searched
                                  recursively up from the requiring module's
                                  location.                              [array]
  --moduleFileExtensions          An array of file extensions your modules use.
                                  If you require modules without specifying a
                                  file extension, these are the extensions Jest
                                  will look for.                         [array]
  --moduleNameMapper              A JSON string with a map from regular
                                  expressions to module names that allow to stub
                                  out resources, like images or styles with a
                                  single module                         [string]
  --modulePathIgnorePatterns      An array of regexp pattern strings that are
                                  matched against all module paths before those
                                  paths are to be considered "visible" to the
                                  module loader.                         [array]
  --modulePaths                   An alternative API to setting the NODE_PATH
                                  env variable, modulePaths is an array of
                                  absolute paths to additional locations to
                                  search when resolving modules.         [array]
  --noStackTrace                  Disables stack trace in test results output
                                                                       [boolean]
  --notify                        Activates notifications for test results.
                                                                       [boolean]
  --notifyMode                    Specifies when notifications will appear for
                                  test results.     [string] [default: "always"]
  --onlyChanged, -o               Attempts to identify which tests to run based
                                  on which files have changed in the current
                                  repository. Only works if you're running tests
                                  in a git or hg repository at the moment.
                                                                       [boolean]
  --onlyFailures, -f              Run tests that failed in the previous
                                  execution.                           [boolean]
  --outputFile                    Write test results to a file when the --json
                                  option is also specified.             [string]
  --passWithNoTests               Will not fail if no tests are found (for
                                  example while using `--testPathPattern`.)
                                                      [boolean] [default: false]
  --preset                        A preset that is used as a base for Jest's
                                  configuration.                        [string]
  --prettierPath                  The path to the "prettier" module used for
                                  inline snapshots.
                                                  [string] [default: "prettier"]
  --projects                      A list of projects that use Jest to run all
                                  tests of all projects in a single instance of
                                  Jest.                                  [array]
  --reporters                     A list of custom reporters for the test suite.
                                                                         [array]
  --resetMocks                    Automatically reset mock state between every
                                  test. Equivalent to calling
                                  jest.resetAllMocks() between each test.
                                                                       [boolean]
  --resetModules                  If enabled, the module registry for every test
                                  file will be reset before running each
                                  individual test.                     [boolean]
  --resolver                      A JSON string which allows the use of a custom
                                  resolver.                             [string]
  --restoreMocks                  Automatically restore mock state and
                                  implementation between every test. Equivalent
                                  to calling jest.restoreAllMocks() between each
                                  test.                                [boolean]
  --rootDir                       The root directory that Jest should scan for
                                  tests and modules within.             [string]
  --roots                         A list of paths to directories that Jest
                                  should use to search for files in.     [array]
  --runInBand, -i                 Run all tests serially in the current process
                                  (rather than creating a worker pool of child
                                  processes that run tests). This is sometimes
                                  useful for debugging, but such use cases are
                                  pretty rare.                         [boolean]
  --runTestsByPath                Used when provided patterns are exact file
                                  paths. This avoids converting them into a
                                  regular expression and matching it against
                                  every single file.  [boolean] [default: false]
  --runner                        Allows to use a custom runner instead of
                                  Jest's default test runner.           [string]
  --setupFiles                    The paths to modules that run some code to
                                  configure or set up the testing environment
                                  before each test.                      [array]
  --setupTestFrameworkScriptFile  The path to a module that runs some code to
                                  configure or set up the testing framework
                                  before each test.                     [string]
  --showConfig                    Print your jest config and then exits.
                                                                       [boolean]
  --silent                        Prevent tests from printing messages through
                                  the console.                         [boolean]
  --skipFilter                    Disables the filter provided by --filter.
                                  Useful for CI jobs, or local enforcement when
                                  fixing tests.                        [boolean]
  --snapshotSerializers           A list of paths to snapshot serializer modules
                                  Jest should use for snapshot testing.  [array]
  --testEnvironment               Alias for --env                       [string]
  --testEnvironmentOptions        Test environment options that will be passed
                                  to the testEnvironment. The relevant options
                                  depend on the environment.            [string]
  --testFailureExitCode           Exit code of `jest` command if the test run
                                  failed                                [string]
  --testLocationInResults         Add `location` information to the test results
                                                      [boolean] [default: false]
  --testMatch                     The glob patterns Jest uses to detect test
                                  files.                                 [array]
  --testNamePattern, -t           Run only tests with a name that matches the
                                  regex pattern.                        [string]
  --testPathIgnorePatterns        An array of regexp pattern strings that are
                                  matched against all test paths before
                                  executing the test. If the test path matches
                                  any of the patterns, it will be skipped.
                                                                         [array]
  --testPathPattern               A regexp pattern string that is matched
                                  against all tests paths before executing the
                                  test.                                  [array]
  --testRegex                     The regexp pattern Jest uses to detect test
                                  files.                                [string]
  --testResultsProcessor          Allows the use of a custom results processor.
                                  This processor must be a node module that
                                  exports a function expecting as the first
                                  argument the result object.           [string]
  --testRunner                    Allows to specify a custom test runner. The
                                  default is  `jasmine2`. A path to a custom
                                  test runner can be provided:
                                  `<rootDir>/path/to/testRunner.js`.    [string]
  --testURL                       This option sets the URL for the jsdom
                                  environment.                          [string]
  --timers                        Setting this value to fake allows the use of
                                  fake timers for functions such as setTimeout.
                                                                        [string]
  --transform                     A JSON string which maps from regular
                                  expressions to paths to transformers. [string]
  --transformIgnorePatterns       An array of regexp pattern strings that are
                                  matched against all source file paths before
                                  transformation.                        [array]
  --unmockedModulePathPatterns    An array of regexp pattern strings that are
                                  matched against all modules before the module
                                  loader will automatically return a mock for
                                  them.                                  [array]
  --updateSnapshot, -u            Use this flag to re-record snapshots. Can be
                                  used together with a test suite pattern or
                                  with `--testNamePattern` to re-record snapshot
                                  for test matching the pattern        [boolean]
  --useStderr                     Divert all output to stderr.         [boolean]
  --verbose                       Display individual test results with the test
                                  suite hierarchy.                     [boolean]
  --watch                         Watch files for changes and rerun tests
                                  related to changed files. If you want to
                                  re-run all tests when a file has changed, use
                                  the `--watchAll` option.             [boolean]
  --watchAll                      Watch files for changes and rerun all tests.
                                  If you want to re-run only the tests related
                                  to the changed files, use the `--watch`
                                  option.                              [boolean]
  --watchPathIgnorePatterns       An array of regexp pattern strings that are
                                  matched against all paths before trigger test
                                  re-run in watch mode. If the test path matches
                                  any of the patterns, it will be skipped.
                                                                         [array]
  --watchman                      Whether to use watchman for file crawling.
                                  Disable using --no-watchman.         [boolean]
*/

/**
 * Execute `jest` test cases with default settings.
 * @param {Object} cmd - `commander` options.
 */
module.exports = (cmd) => { // eslint-disable-line
  if (process.env.NODE_ENV == null) {
    process.env.NODE_ENV = 'test'
  }
  const jest = require.resolve('jest-cli/bin/jest')
  const args = [
    '--forceExit',
    '--detectOpenHandles',
    '--config', require.resolve('../etc/jest.config'),
  ]
  if (cmd.watch) args.push('--watch')
  if (cmd.verbose) args.push('--verbose')

  helpers.info(`start testing => ${process.cwd()}`)
  helpers.execute(jest, args)
}
