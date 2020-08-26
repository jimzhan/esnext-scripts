#!/usr/bin/env node
const path = require('path');
const yargs = require('yargs');

/* eslint-disable-next-line no-unused-expressions */
yargs
  .commandDir(path.resolve(__dirname, 'cmd'))
  .demandCommand()
  .help().argv;
