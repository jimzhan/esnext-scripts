const helpers = require('../tasks/helpers')

describe(helpers.pkg.name, () => {
  it('getPackageSettings()', () => {
    const url = helpers.getPackageSettings('repository')
    expect(url).toBe('https://github.com/jimzhan/esnext-scripts')
  })
})
