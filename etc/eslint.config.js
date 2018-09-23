module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    require.resolve('eslint-config-standard'),
    require.resolve('eslint-config-standard-react')
  ],
  env: {
    browser: true,
    node: true,
    jest: true
  }
}
