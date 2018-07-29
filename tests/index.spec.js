const helpers = require('../tasks/helpers')

describe(helpers.pkg.name, () => {
  it('should test itself', () => {
    expect(helpers.pkg.name).toBe('esnext-scripts')
  })
})
