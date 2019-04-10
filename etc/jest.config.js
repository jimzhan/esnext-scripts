const { consts } = require('../lib')
const { cwd, config } = consts

module.exports = {
  json: false,
  verbose: true,
  rootDir: cwd,
  setupFiles: [config.jest.enzyme],
  testEnvironment: 'node',
  transform: JSON.stringify({
    '^.+\\.jsx?$': config.jest.transformer
  })
}
