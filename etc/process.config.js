/* eslint-disable */
const os = require('os')
const path = require('path')

const basedir = process.cwd()
const logdir = path.resolve(basedir, 'logs')

const instances = os.cpus().length
const memory = os.totalmem() / (1024 ** 3)
const max_memory_restart = `${memory / instances}G`
const { name } = require(path.resolve(basedir, 'package.json'))

module.exports = {
  apps: [{
    name,
    instances,
    exec_mode: 'cluster',
    watch: false,
    autorestart: true,
    max_memory_restart,
    error_file: path.resolve(logdir, 'err.log'),
    out_file: path.resolve(logdir, 'out.log'),
    node_args: '-r esm',
    merge_logs: true,
  }],
}
