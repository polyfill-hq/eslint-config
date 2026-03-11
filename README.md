# @polyfillhq/eslint-config

NPM Link: https://www.npmjs.com/package/@polyfillhq/eslint-config

## Requirements

- `eslint@^9`
- Flat config (`eslint.config.js`)

## Install

```bash
pnpm add -D eslint @polyfillhq/eslint-config
```

## Usage

### Base config

```js
const baseConfig = require('@polyfillhq/eslint-config');

module.exports = [
	...baseConfig,
];
```

### Node config

```js
const nodeConfig = require('@polyfillhq/eslint-config/node');

module.exports = [
	...nodeConfig,
];
```

### React config

```js
const reactConfig = require('@polyfillhq/eslint-config/react');

module.exports = [
	...reactConfig,
];
```

## Breaking Changes in v9

- Migrated from legacy `.eslintrc` extends to flat config arrays.
- Removed Airbnb config dependencies.
- Replaced legacy TypeScript parser/plugin pair with `typescript-eslint` package.
- Removed `eslint-plugin-better-max-params` and `eslint-plugin-filename-export` usage.
