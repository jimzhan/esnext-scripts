module.exports = (plop) => {
  plop.setGenerator('new', {
    description: 'Create a new web application starter kit',
    actions: require('./project'), // eslint-disable-line global-require
  })
}
