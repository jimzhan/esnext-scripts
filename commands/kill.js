const consts = require('../consts')
const helpers = require('./helpers')

exports.command = 'kill'
exports.desc = 'Process manager for production server'

exports.handler = (argv) => {
  const { pm2 } = consts.cmd
  helpers.execute(pm2, ['kill'])
}
