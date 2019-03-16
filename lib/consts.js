const cwd = process.cwd()

const cmd = {
  babel: require.resolve('@babel/cli/bin/babel'),
  babelNode: require.resolve('@babel/node/bin/babel-node'),
  nodemon: require.resolve('nodemon/bin/nodemon'),
  prettier: require.resolve('prettier-standard/src/cli')
}

const config = {
  babel: require.resolve('../etc/babel.config'),
  eslint: require.resolve('../etc/eslint.config'),
  jest: {
    enzyme: require.resolve('../etc/jest.enzyme.js'),
    transformer: require.resolve('../etc/jest.transformer.js')
  }
}

module.exports = {
  cwd,
  cmd,
  config
}
