const cwd = process.cwd()
const isWin = process.platform === 'win32'

const cmd = {
  babel: require.resolve('@babel/cli/bin/babel'),
  babelNode: require.resolve('@babel/node/bin/babel-node'),
  node: isWin ? 'node.node' : 'node',
  nodemon: require.resolve('nodemon/bin/nodemon'),
  pm2: require.resolve('pm2/bin/pm2-docker'),
  prettier: require.resolve('prettier-standard/src/cli')
}

const config = {
  babel: require.resolve('../etc/babel.config'),
  eslint: require.resolve('../etc/eslint.config'),
  pm2: require.resolve('../etc/ecosystem.config'),
  jest: {
    enzyme: require.resolve('../etc/jest.enzyme.js'),
    transformer: require.resolve('../etc/jest.transformer.js')
  }
}

module.exports = {
  cwd,
  cmd,
  config,
  isWin
}
