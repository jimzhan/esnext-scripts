import helpers from './helpers'

describe(helpers.pkg.name, () => {
  it('helpers.readSettings()', async () => {
    const repository = await helpers.readSettings({ namespace: 'repository' })
    expect(repository.type).toBe('git')
    expect(repository.url).toBe(
      'git+https://github.com/jimzhan/esnext-scripts.git'
    )
  })
})
