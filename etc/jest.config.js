module.exports = {
  verbose: true,
  rootDir: process.cwd(),
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': require.resolve('./jest.transformer.js'),
  },
  setupFiles: [
    require.resolve('./jest.enzyme.js'),
  ],
}
