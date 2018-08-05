const path = require('path')
const plop = require('node-plop')(path.resolve(__dirname, 'generators', 'plopfile.js'))


module.exports = (name) => {
  const app = plop.getGenerator('create')
  app.runActions({ name }).then(() => {

  })
}
