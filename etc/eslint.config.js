module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    require.resolve('eslint-config-airbnb'),
    'plugin:security/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    commonjs: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
