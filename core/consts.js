const cwd = process.cwd();
const isWin = process.platform === 'win32';

const cmd = {
  babel: require.resolve('@babel/cli/bin/babel'),
  babelNode: require.resolve('@babel/node/bin/babel-node'),
  node: isWin ? 'node.node' : 'node',
  nodemon: require.resolve('nodemon/bin/nodemon'),
};

const config = {
  babel: require.resolve('../etc/babel.config'),
  eslint: require.resolve('../etc/eslint.config'),
};

module.exports = {
  cwd,
  cmd,
  config,
  isWin,
};
