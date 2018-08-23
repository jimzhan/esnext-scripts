module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: [
  ],
  rules: {
    semi: [
      'error',
      'never',
    ],
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
}
