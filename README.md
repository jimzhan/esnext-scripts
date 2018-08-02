# esnext-scripts

Opinionated ESNext application scripts and configurations.

[![build](https://travis-ci.org/jimzhan/esnext-scripts.svg?branch=master)](https://travis-ci.org/jimzhan/esnext-scripts)
[![npm version](https://badge.fury.io/js/esnext-scripts.svg)](https://www.npmjs.com/package/esnext-scripts)
[![JavaScript Style Guide](https://camo.githubusercontent.com/387caee7992b38dcac6cb23f87abf0ba139d7101/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d616972626e622d626c75652e737667)](https://github.com/airbnb/javascript)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


## Install

```shell
npm install esnext-scripts
```

or `yarn`

```shell
yarn add esnext-scripts
```

## What?

`esnext-scripts` is set of pre-configured helpers for your next generation Javascript application. With it, you can now fully focus on your valuable implementations instead of playing around with settings & helpers again & again. Batteries included:

- Latest EMACScript supports backed by:
  * [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env/)
  * [babel-preset-stage-2](https://babeljs.io/docs/en/babel-preset-stage-2)
  * [babel-preset-react](https://babeljs.io/docs/en/babel-preset-react)
- A mostly reasonable approach to JavaScript by:
  * [ESLint](https://eslint.org/)
  * [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)
- Delightful JavaScript Testing with
  * [Jest](https://github.com/facebook/jest)
  * [Enzyme](https://github.com/airbnb/enzyme)


## Why?

In my recent mono-repository implementation, I found that really hard and confusing about testing packages built on top of `babel`. Babel is awesome, but it doesn't really fly on mono-repository packages as it applies to package level only, meaning that you'll need to duplicate your `babel` and `jest` settings for each individual packages, which isn't really developer-friendly, so I decided to create a developer-friendly solution, here is comes :smiley:


## Available commands

- `esnext lint [optional-folder]` - start linting with `airbnb` rules set.
- `esnext test` - start executing your `Jest` test specs. Supported options:
  * `--detectLeaks` - **EXPERIMENTAL**: Detect memory leaks in tests. After executing a test, it will try to garbage collect the global object used, and fail if it was leaked.
  * `--detectOpenHandles` - Print out remaining open handles preventing Jest from exiting at the end of a test run.
  * `--forceExit` - Force Jest to exit after all tests have completed running. This is useful when resources set up by test code cannot be.
  * `--watch` - Watch files for changes and rerun tests related to changed files.
  * `--verbose` - Display individual test results with the test suite hierarchy.


## Usage

A sample structure of React application folder.

```
- __tests__/
    App.spec.jsx
- src/
    App.jsx
```

`App.spec.jsx`.

```javascript
import React from 'react'
import { shallow } from 'enzyme'
import App from '@webapp/ui/App'

describe('<App />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<App>Application</App>)
    expect(wrapper).toBeTruthy()
  })
}
```

`package.json`.

```json
  "scripts": {
    "lint": "esnext lint",
    "lint:other-folder": "esnext lint other-folder",
    "test": "esnext test"
  },
```


## Configuration

* Configure your `jest` via `package.json`

```json
"jest": {
    "collectCoverage": true,
    "collectCoverageFrom": [
      "**/*.{js}",
      "!**/node_modules/**"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    }
  }
}
```

**NOTE** All these settings will be stringify from JSON to `string` then passed to `jest.runCLI`, since `jest` does not support any programmatic way for calling at the moment.

### License

> MIT License 2018 © Jim Zhan
