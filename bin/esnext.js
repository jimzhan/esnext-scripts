#!/usr/bin/env node
const path = require('path')
const yargs = require('yargs')

/* eslint-disable no-unused-expressions */
yargs.commandDir(path.resolve(__dirname, '..', 'commands'))
  .demandCommand()
  .help()
  .argv
