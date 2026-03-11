// import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';
import eslintReact from '@eslint-react/eslint-plugin';

import baseConfig from './index.js';

// const reactRecommendedRules = reactPlugin.configs.recommended.rules;
// const reactJsxRuntimeRules = reactPlugin.configs['jsx-runtime'].rules;
const reactHooksRecommendedRules = reactHooksPlugin.configs.recommended.rules;

/* eslint-disable perfectionist/sort-objects */

export default [
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
      ...eslintReact.configs.recommended.plugins,
      // 'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      /* eslint-enable perfectionist/sort-objects */
      // ...reactRecommendedRules,
      // ...reactJsxRuntimeRules,
      ...eslintReact.configs.recommended.rules,
      ...reactHooksRecommendedRules,
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
      // 'react/button-has-type': 'off',
      // 'react/destructuring-assignment': [
      //   'off',
      // ],
      // 'react/jsx-max-props-per-line': 'off',
      // 'react/jsx-no-bind': [
      //   'off',
      // ],
      // 'react/jsx-no-useless-fragment': 'warn',
      // 'react/jsx-props-no-spreading': [
      //   'off',
      // ],
      // 'react/react-in-jsx-scope': [
      //   'off',
      // ],
      // 'react/require-default-props': [
      //   'off',
      // ],
    },
  },
];
