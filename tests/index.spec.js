const pkg = require('../package.json')

describe('[esnext-scripts]', () => {
  it('should test itself', () => {
    expect(pkg.name).toBe('esnext-scripts')
  })
})
