import eslintReactPlugin from '@eslint-react/eslint-plugin';
import jsxControlStatementsPlugin from 'eslint-plugin-jsx-control-statements';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

import baseConfig from './index.js';

export default baseConfig.append(
  eslintReactPlugin.configs['recommended-typescript'],
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
      '@eslint-react/no-useless-fragment': 'warn',
    },
  },
);
