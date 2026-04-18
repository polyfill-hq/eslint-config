import eslintReact from '@eslint-react/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { reactRefresh } from 'eslint-plugin-react-refresh';
import globals from 'globals';

import baseConfig from './index.js';

/* eslint-disable perfectionist/sort-objects */

export default [
  ...baseConfig,
  eslintReact.configs['recommended-typescript'],
  eslintReact.configs['strict-type-checked'],
  reactRefresh.configs.recommended(),
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
      ...eslintReact.configs.recommended.plugins,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      /* eslint-enable perfectionist/sort-objects */
      ...eslintReact.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      '@stylistic/jsx-max-props-per-line': [
        'warn',
        {
          maximum: 2,
          when: 'always',
        },
      ],
      '@stylistic/jsx-one-expression-per-line': [
        'warn',
        {
          allow: 'non-jsx',
        },
      ],
      '@stylistic/jsx-quotes': ['warn', 'prefer-single'],
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
      'react-refresh/only-export-components': 'warn',
    },
  },
];
