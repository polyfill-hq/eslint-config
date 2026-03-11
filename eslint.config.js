const perfectionist = require('eslint-plugin-perfectionist');

const reactConfig = require('./react.js');

module.exports = [
  ...reactConfig,
  {
    files: ['*.js'],
    plugins: {
      perfectionist,
    },
    rules: {
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
