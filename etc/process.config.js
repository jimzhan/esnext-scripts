/* eslint-disable */
const os = require('os')
const path = require('path')
const consts = require('../consts')

const logdir = path.resolve(consts.basedir, 'logs')

const instances = os.cpus().length
const memory = os.totalmem() / (1024 ** 3)
const max_memory_restart = `${Math.round(memory / instances)}G`
const { name } = require(consts.package)

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
    node_args: '-r esm -r dotenv/config',
    merge_logs: true
  }],
}
