const nodeConfig = require('@polyfillhq/eslint-config/node');

module.exports = [
  ...nodeConfig,
  // ...require('@polyfillhq/eslint-config/react'),
  {
    rules: {},
  },
];
