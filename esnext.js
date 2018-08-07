#!/usr/bin/env node
const yargs = require('yargs')

/* eslint-disable no-unused-expressions */
yargs.commandDir('commands')
  .demandCommand()
  .help()
  .argv
