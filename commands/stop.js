const fs = require('fs')
const assert = require('assert')
const consts = require('../consts')
const helpers = require('./helpers')

exports.command = 'stop [name]'
exports.desc = 'Process manager for production server'

exports.handler = (argv) => {
  let name = argv.name
  if (!name) {
    name = fs.existsSync(consts.package) && require(consts.package).name
  }
  assert(name, 'neither [name] or package.json found')
  const { pm2 } = consts.cmd
  helpers.execute(pm2, ['stop', name])
}
