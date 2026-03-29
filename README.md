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
import baseConfig from '@polyfillhq/eslint-config';

export default [
  ...baseConfig,
];
```

### Node config

```js
import nodeConfig from '@polyfillhq/eslint-config/node';

export default [
  ...nodeConfig,
];
```

### React config

```js
import reactConfig from '@polyfillhq/eslint-config/react';

export default [
  ...reactConfig,
];
```

## Breaking Changes in v9

- Migrated from legacy `.eslintrc` extends to flat config arrays.
- Removed Airbnb config dependencies.
- Replaced legacy TypeScript parser/plugin pair with `typescript-eslint` package.
- Removed `eslint-plugin-better-max-params` and `eslint-plugin-filename-export` usage.
