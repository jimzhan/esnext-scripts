const helpers = require('../commands/helpers')

describe(helpers.pkg.name, () => {
  it('should test itself', () => {
    expect(helpers.pkg.name).toBe('esnext-scripts')
  })
})
