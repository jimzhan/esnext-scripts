import helpers from './helpers'

describe(helpers.pkg.name, () => {
  it('helpers.getPackageSettings()', () => {
    const repository = helpers.getPackageSettings('repository')
    expect(repository.type).toBe('git')
    expect(repository.url).toBe(
      'git+https://github.com/jimzhan/esnext-scripts.git'
    )
  })
})
