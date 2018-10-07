const path = require('path')

const basedir = process.cwd()

exports.basedir = basedir

exports.cmd = {
  pm2: require.resolve('pm2/bin/pm2'),
  nodemon: require.resolve('nodemon/bin/nodemon')
}

exports.package = path.resolve(basedir, 'package.json')
