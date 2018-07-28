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
  .action(() => {
    jest(program)
  })

program.parse(process.argv)
