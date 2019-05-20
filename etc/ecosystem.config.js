const os = require('os')
const path = require('path')

const cwd = process.cwd()
const instances = os.cpus().length
const memory = os.totalmem() / 1024 ** 3
/* eslint-disable-next-line security/detect-non-literal-require */
const { name } = require(`${cwd}/package.json`)
const logdir = path.resolve(__dirname, 'logs')
const script = 'play.js'

module.exports = {
  apps: [
    {
      name,
      instances,
      script,
      exec_mode: 'cluster',
      watch: false,
      autorestart: true,
      node_args: ['--require=esm'],
      max_memory_restart: `${Math.round(memory / instances)}G`,
      error_file: path.resolve(logdir, 'err.log'),
      out_file: path.resolve(logdir, 'out.log'),
      merge_logs: true
    }
  ]
}
