import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import eslintJs from '@eslint/js';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import jsxControlStatementsPlugin from 'eslint-plugin-jsx-control-statements';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

import baseConfig from './index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintJs.configs.recommended,
});

const a11yOff = Object.keys(jsxA11yPlugin.rules)
  .reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = 'off'; return acc; }, {});

export default [
  ...compat.extends(
    'airbnb',
    'airbnb/hooks',
    '@kesills/airbnb-typescript',
  ),
  ...baseConfig,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooksPlugin.configs['recommended-latest'],
  {
    plugins: {
      'jsx-control-statements': jsxControlStatementsPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        JSX: 'readonly',
        React: 'readonly',
      },
    },
    rules: {
      ...jsxControlStatementsPlugin.configs.recommended.rules,
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
      'react/jsx-max-props-per-line': ['warn', {
        maximum: 2,
        when: 'always',
      }],
    },
  },
];
