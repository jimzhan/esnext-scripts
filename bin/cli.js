#!/usr/bin/env node
const program = require('commander')
const { pkg } = require('../tasks/helpers')
const { lint, jest } = require('../tasks')

program.version(pkg.version)

program.command('lint [dir]')
  .option('--fix', 'Automatically fix problems')
  .option('--fix-dry-run', 'Automatically fix problems without saving the changes to the file system')
  .action((dir, cmd) => lint(dir, cmd))

program.command('test')
  .option('--watch', 'Watch files for changes and rerun tests related to changed files')
  .option('--verbose', 'Display individual test results with the test suite hierarchy')
  .option(
    '--forceExit',
    'Force Jest to exit after all tests have completed running. This is useful when resources set up by test code cannot be' // eslint-disable-line
  )
  .action(cmd => jest(cmd))

program.parse(process.argv)
