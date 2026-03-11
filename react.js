const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const globals = require('globals');

const baseConfig = require('./index.js');

const reactRecommendedRules = reactPlugin.configs.recommended.rules;
const reactJsxRuntimeRules = reactPlugin.configs['jsx-runtime'].rules;
const reactHooksRecommendedRules = reactHooksPlugin.configs.recommended.rules;

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        JSX: 'readonly',
        React: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactRecommendedRules,
      ...reactJsxRuntimeRules,
      ...reactHooksRecommendedRules,
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
      // 'jsx-quotes': [
      //   'error',
      //   'prefer-single',
      // ],
      'no-template-curly-in-string': 'error',
      'react/button-has-type': 'off',
      'react/destructuring-assignment': [
        'off',
      ],
      'react/jsx-max-props-per-line': [
        'warn',
        {
          maximum: 2,
          when: 'always',
        },
      ],
      'react/jsx-no-bind': [
        'off',
      ],
      'react/jsx-no-useless-fragment': 'warn',
      '@stylistic/jsx-one-expression-per-line': [
        'warn',
        {
          allow: 'non-jsx',
        },
      ],
      'react/jsx-props-no-spreading': [
        'off',
      ],
      'react/react-in-jsx-scope': [
        'off',
      ],
      'react/require-default-props': [
        'off',
      ],
    },
  },
];
