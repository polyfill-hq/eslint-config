NPM Link: https://www.npmjs.com/package/@polyfillhq/eslint-config

## Usage (ESLint 9 Flat Config)

This package requires ESLint 9+ and uses the flat config format. Your project must use ESM (`"type": "module"` in package.json).

### Base Config (TypeScript)

```js
// eslint.config.js
import baseConfig from '@polyfillhq/eslint-config';

export default [
  ...baseConfig,
];
```

### Node.js Config

```js
// eslint.config.js
import nodeConfig from '@polyfillhq/eslint-config/node';

export default [
  ...nodeConfig,
];
```

### React Config

```js
// eslint.config.js
import reactConfig from '@polyfillhq/eslint-config/react';

export default [
  ...reactConfig,
];
```

### pnpm Monorepos

If using pnpm, add this to your `pnpm-workspace.yaml` to hoist ESLint plugins:

```yaml
publicHoistPattern:
  - "*eslint*"
```
