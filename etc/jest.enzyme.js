const jest = require('jest-cli')
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

jest.setTimeout(60000)

Enzyme.configure({ adapter: new Adapter() })
