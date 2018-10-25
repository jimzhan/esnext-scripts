const uid = require('uid-safe')

exports.command = 'secret'
exports.desc = 'Secret strings generator [default: 60]'
exports.option = [
  ('--length', { description: 'specify length of the generated secret string [default: 60]' })
]

exports.handler = (argv) => {
  const { length } = argv
  console.log(
    uid.sync(Number.isInteger(length) ? length : 60)
  )
}
