const lodash = require('lodash')
const { config } = require('esnext-scripts')

module.exports = lodash.merge(config.eslint, {
  rules: {
    'import/prefer-default-export': 0,
    'func-names': ["error", "never"],
  }
})
