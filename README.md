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

`esnext-scripts` is set of pre-configured helpers for your next generation Javascript application. With it, you can now fully focus on your valuable implementations instead of playing around with various settings & helpers over and over again. Batteries included:

- Latest EMACScript supports backed by:
  * [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env/)
  * [babel-preset-stage-1](https://babeljs.io/docs/en/babel-preset-stage-1)
  * [babel-preset-react](https://babeljs.io/docs/en/babel-preset-react)
- A mostly reasonable approach to JavaScript by:
  * [ESLint](https://eslint.org/)
  * [StandardJS Style Guide](https://standardjs.com)
  * [Prettier](https://prettier.io/)
- Delightful JavaScript Testing with
  * [Jest](https://github.com/facebook/jest)
  * [Enzyme](https://github.com/airbnb/enzyme)


## Why?

> How much time you had spent on configuring your application boilerplate to make it support the "future" JavaScript spec. each time you start a new project?

> How many times you had been confused by the obsolete `babel` settings (plugins, presets) or even worse, your applications got broken?


## How?

### Available commands


- `esnext build <src> <out>` - compile an input directory of modules into an output directory.
- `esnext exec <script>` - execute a Node.js script with ESNext supports.
- `esnext format <glob>` - format files find by the given `glob` pattern via `prettier`.
- `esnext lint [optional-folder]` - start linting with `standardjs` rules set.
- `esnext test` - start executing your `Jest` test specs.


### Sample Usage

A sample structure of React application folder.

```
- src/
    App.jsx
    App.test.jsx
```

`App.test.jsx`.

```javascript
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  it('renders <App /> component', () => {
    const wrapper = shallow(<App>Application</App>)
    expect(wrapper).toBeTruthy()
  })
}
```

`package.json`.

```json
  "lint-staged": {
    "**/*.{js,jsx}": [
      "esnext format 'src/**/*.js",
      "esnext lint --fix"
    ]
  },
  "husky": {
    "hooks": {
      "precommit": "lint-staged",
      "commitmsg": "commitlint --env HUSKY_GIT_PARAMS"
    }
  },
  "scripts": {
    "lint": "esnext lint",
    "lint:other-folder": "esnext lint other-folder",
    "test": "esnext test"
  },
```


### License

> MIT License 2019 © Jim Zhan
