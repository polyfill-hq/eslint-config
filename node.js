import globals from 'globals';

import baseConfig from './index.js';

export default [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
