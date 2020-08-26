const cwd = process.cwd();
const isWin = process.platform === 'win32';

const cmd = {
  babel: require.resolve('@babel/cli/bin/babel'),
  babelNode: require.resolve('@babel/node/bin/babel-node'),
  node: isWin ? 'node.node' : 'node',
  nodemon: require.resolve('nodemon/bin/nodemon'),
  prettier: require.resolve('prettier/bin-prettier'),
};

const config = {
  babel: require.resolve('../etc/babel.config'),
  eslint: require.resolve('../etc/eslint.config'),
  prettier: require.resolve('../etc/prettier.config'),
  jest: {
    enzyme: require.resolve('../etc/jest.enzyme'),
    transformer: require.resolve('../etc/jest.transformer'),
  },
};

module.exports = {
  cwd,
  cmd,
  config,
  isWin,
};
