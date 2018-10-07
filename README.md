# esnext-scripts

Opinionated ESNext application scripts and configurations.

[![build](https://travis-ci.org/jimzhan/esnext-scripts.svg?branch=master)](https://travis-ci.org/jimzhan/esnext-scripts)
[![npm version](https://badge.fury.io/js/esnext-scripts.svg)](https://www.npmjs.com/package/esnext-scripts)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm downloads](https://img.shields.io/npm/dt/esnext-scripts.svg)](https://www.npmjs.com/package/esnext-scripts)


## Install

```shell
npm install esnext-scripts
```

or `yarn`

```shell
yarn add esnext-scripts
```

## What?

`esnext-scripts` is set of pre-configured helpers for your next generation Javascript application. With it, you can now fully focus on your valuable implementations instead of playing around with various settings & helpers again & again. Batteries included:

- Latest EMACScript supports backed by:
  * [esm](https://github.com/standard-things/esm)
  * [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env/)
  * [babel-preset-stage-1](https://babeljs.io/docs/en/babel-preset-stage-1)
  * [babel-preset-react](https://babeljs.io/docs/en/babel-preset-react)
- A mostly reasonable approach to JavaScript by:
  * [ESLint](https://eslint.org/)
  * [StandardJS Style Guide](https://standardjs.com)
- Delightful JavaScript Testing with
  * [Jest](https://github.com/facebook/jest)
  * [Enzyme](https://github.com/airbnb/enzyme)


## Why?

> How much time you had spent on configuring your application boilerplate to make it support the "future" JavaScript spec. each time you start a new project?

> How many times you had been confused by the obsolete `babel` settings (plugins, presets) or even worse, your applications got broken?


## How?

### Available commands

- `esnext lint [optional-folder]` - start linting with `standardjs` rules set.
- `esnext exec <script>` - execute a Node.js script with ESNext supports.
- `esnext start [script]` - server process manager for both development (nodemon) and production (pm2).
  - `start` your application server (via the given script file) for:
    * `NODE_ENV=development` - with builtin [nodemon](https://github.com/remy/nodemon), monitoring any changes in your application with hotreload supports.
    * `NODE_ENV=production` - backed by [pm2](http://pm2.keymetrics.io/) with `cluster` mode, scale accross all CPUs available.
- `esnext stop [name]` - synonym to `pm2 stop [name]` (`name` in cwd's `package.json` as fallback).
- `esnext kill` - synonym to `pm2 kill`.
- `esnext list` - synonym to `pm2 list`.
- `esnext test` - start executing your `Jest` test specs. Supported options:
  * `--detectLeaks` - **EXPERIMENTAL**: Detect memory leaks in tests. After executing a test, it will try to garbage collect the global object used, and fail if it was leaked.
  * `--detectOpenHandles` - Print out remaining open handles preventing Jest from exiting at the end of a test run.
  * `--forceExit` - Force Jest to exit after all tests have completed running. This is useful when resources set up by test code cannot be.
  * `--watch` - Watch files for changes and rerun tests related to changed files.
  * `--verbose` - Display individual test results with the test suite hierarchy.


### Sample Usage

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
import App from './App'

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
    "start": "yo-env",
    "start:development": "cross-env DEBUG=* esnext start index.js",
    "start:production": "esnext start index.js",
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

**NOTE** All these settings will be stringified from JSON to `string` then passed to `jest.runCLI`, since `jest` does not support any programmatic way for calling at the moment.

### License

> MIT License 2018 © Jim Zhan
