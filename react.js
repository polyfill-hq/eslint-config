const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules)
  .reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = 'off'; return acc; }, { });

module.exports = {
  env: {
    browser: true,
  },
  plugins: [
  ],
  globals: {
    JSX: 'readonly',
    React: 'readonly',
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    '@kesills/airbnb-typescript',
    'plugin:jsx-control-statements/recommended',
    './index.js',
  ],

  rules: {
    ...a11yOff,
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        variables: false,
      },
    ],
    'func-style': [
      'off',
      'declaration',
    ],
    'no-template-curly-in-string': 'error',

    'react/button-has-type': 'off',
    'react/destructuring-assignment': [
      'off',
    ],
    'react/jsx-no-bind': [
      'off',
    ],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-props-no-spreading': [
      'off',
    ],
    'react/react-in-jsx-scope': [
      'off',
    ],
    'react/require-default-props': [
      'off',
    ],
    'react/jsx-one-expression-per-line': ['warn', {
      allow: 'non-jsx',
    }],
  },

};
