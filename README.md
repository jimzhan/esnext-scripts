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
- Delightful JavaScript Testing with:
  * [Jest](https://github.com/facebook/jest)
  * [Enzyme](https://github.com/airbnb/enzyme)

## Available commands

- `esnext lint [optional-folder]` - start linting with `airbnb` rules set.
- `esnext test` - start executing your `Jest` test specs.

## Usage

An sample structure of React application folder.

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

### License

> MIT License 2018 © Jim Zhan
