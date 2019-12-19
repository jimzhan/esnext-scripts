import core from './core';

describe(core.pkg.name, () => {
  it('core.readSettings()', async () => {
    const repository = await core.readSettings({ namespace: 'repository' });
    expect(repository.type).toBe('git');
    expect(repository.url).toBe(
      'git+https://github.com/jimzhan/esnext-scripts.git',
    );
  });
});
