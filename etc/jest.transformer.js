const jest = require('babel-jest');
const config = require('./babel.config');

module.exports = jest.createTransformer(config);
