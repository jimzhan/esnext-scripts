const fs = require('fs')
const path = require('path')

const basedir = path.resolve(__dirname, '..', '..', 'scaffold', 'project')
const pkgdir = path.resolve(basedir, 'packages')
const data = { version: '0.1.0' }
const type = 'addMany'

const out = path.resolve(process.cwd(), '{{lowerCase name}}')

// ------------------------------------------------------------
// Root template files including VSCode settings & ESLint etc.
// ------------------------------------------------------------
const actions = [
  {
    type,
    data,
    base: basedir,
    destination: out,
    templateFiles: [
      '.vscode',
      '.editorconfig',
      '.eslintignore',
      '.eslintrc.js',
      '.yarnrc',
      'package.json',
      'README.md'
    ].map(item => path.join(basedir, item))
  }
]

// ------------------------------------------------------------
// Dynamic packages' templates (backend + frontend).
// ------------------------------------------------------------
fs.readdirSync(pkgdir)
  .filter(item => fs.existsSync(path.join(`${pkgdir}`, item, 'package.json')))
  .map((pkg) => { // eslint-disable-line array-callback-return
    actions.push({
      type,
      data,
      base: `${pkgdir}/${pkg}`,
      destination: `${out}/packages/{{lowerCase name}}-${pkg}`,
      templateFiles: `${pkgdir}/${pkg}/**/**`
    })
  })

module.exports = actions
