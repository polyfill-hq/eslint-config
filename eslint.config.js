import perfectionist from 'eslint-plugin-perfectionist';

import reactConfig from './react.js';

export default [
  ...reactConfig,
  {
    files: ['*.js'],
    plugins: {
      perfectionist,
    },
    rules: {
      'import/order': 'off',
      'perfectionist/sort-objects': [
        'warn',
        {
          order: 'asc',
          type: 'alphabetical',
        },
      ],
    },
  },
];
