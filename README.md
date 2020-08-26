# esnext-scripts

Opinionated ESNext application scripts and configurations.

[![CircleCI](https://circleci.com/gh/jimzhan/esnext-scripts.svg?style=svg)](https://circleci.com/gh/jimzhan/esnext-scripts)
[![npm version](https://badge.fury.io/js/esnext-scripts.svg)](https://www.npmjs.com/package/esnext-scripts)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
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

- Latest EMACScript supports backed by [Babel](https://babeljs.io).
- A mostly reasonable approach to JavaScript by:
  * [ESLint](https://eslint.org/)
  * [Airbnb](https://github.com/airbnb/javascript)
- Delightful JavaScript Testing with
  * [Jest](https://github.com/facebook/jest)
  * [Enzyme](https://github.com/airbnb/enzyme)


## Why?

> How much time you spend on configuring your application boilerplate to make it support the "future" JavaScript spec. each time you start a new project?

> How many times you had been confused by the obsolete `babel` settings (plugins, presets) or even worse, your applications got broken?


## How?

### Available commands


- `esnext build <src> <out>` - compile an input directory of modules into an output directory.
- `esnext run <script> [--watch] [--env]` - execute a Node.js script with ESNext supports (For Development **ONLY**).
- `esnext format <glob>` - format files find by the given `glob` pattern via `prettier`.
- `esnext lint [--fix] [optional-folder]` - start linting with `airbnb` rules set.
- `esnext test` - start executing your `Jest` test specs, custom settings supported via (by order):
  - `<cwd>/jest.config.js`
  - `<cwd>/package.json#jest`


### License

> MIT License 2020 © Jim Zhan
