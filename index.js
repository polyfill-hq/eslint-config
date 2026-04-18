import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { importX } from 'eslint-plugin-import-x';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

import noRelativeParentImportsPlugin from './rules/no-relative-parent-imports-plugin.mjs';

/* eslint-disable perfectionist/sort-objects */

const tsconfigRootDir = fileURLToPath(new URL('.', import.meta.url));

export default [
  {
    ignores: [
      'dist/**',
      'build/**',
      'templates/**',
    ],
  },
  js.configs.recommended,
  stylistic.configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  ...typescriptEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.json'],
        tsconfigRootDir,
      },
    },
    plugins: {
      '@stylistic': stylistic,
      'polyfill-hq': noRelativeParentImportsPlugin,
    },
    settings: {
      'import-x/resolver': {
        node: true,
      },
    },
    rules: {
      /* eslint-enable perfectionist/sort-objects */

      '@stylistic/arrow-parens': [
        'warn',
        'always',
      ],
      '@stylistic/brace-style': [
        'warn',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
      '@stylistic/max-statements-per-line': 'warn',
      '@stylistic/member-delimiter-style': ['warn', {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
      }],
      '@stylistic/no-extra-parens': 'warn',
      '@stylistic/object-curly-newline': [
        'error',
        {
          ExportDeclaration: {
            consistent: true,
            minProperties: 4,
            multiline: true,
          },
          ImportDeclaration: {
            consistent: true,
            minProperties: 4,
            multiline: true,
          },
          ObjectExpression: {
            consistent: true,
            minProperties: 4,
            multiline: true,
          },
          ObjectPattern: {
            consistent: true,
            minProperties: 4,
            multiline: true,
          },
        },
      ],
      '@stylistic/object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/semi': [
        'warn',
        'always',
      ],
      '@stylistic/type-annotation-spacing': [
        'warn',
        {
          after: true,
          before: false,
          overrides: {
            arrow: 'ignore',
          },
        },
      ],
      '@typescript-eslint/array-type': [
        'warn',
        {
          default: 'array',
        },
      ],
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/class-methods-use-this': [
        'off',
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true,
        },
      ],
      '@typescript-eslint/naming-convention': [
        'off',
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': [
        'warn',
        {
          functions: false,
        },
      ],
      '@typescript-eslint/return-await': [
        'error',
        'always',
      ],
      'class-methods-use-this': [
        'off',
      ],
      'consistent-return': [
        'off',
      ],
      'default-case': 'warn',
      'id-length': [
        'warn',
        {
          max: 45,
          min: 1,
        },
      ],
      'import-x/no-cycle': 'off',
      'import-x/no-extraneous-dependencies': ['error', {
        devDependencies: [
          'scripts/**',
          'test*/**',
          '**/*.spec.*',
          './*.config.mjs',
          './*config.ts',
        ],
      }],
      'import-x/no-mutable-exports': 'warn',
      'import-x/order': [
        'warn',
        {
          'alphabetize': {
            caseInsensitive: true,
            order: 'asc',
            orderImportKind: 'ignore',
          },
          'distinctGroup': true,
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'unknown',
          ],
          'named': false,
          'newlines-between': 'always',
          'sortTypesGroup': false,
          'warnOnUnassignedImports': false,
        }],
      'import-x/prefer-default-export': 'off',
      'max-classes-per-file': 'off',

      'max-len': [
        'warn',
        {
          code: 180,
          ignoreUrls: true,
        },
      ],
      'max-nested-callbacks': [
        'warn',
        {
          max: 4,
        },
      ],
      'max-params': [
        'error',
        {
          max: 10,
        },
      ],
      'newline-per-chained-call': [
        'warn',
        {
          ignoreChainWithDepth: 3,
        },
      ],
      'no-await-in-loop': 'off',
      'no-console': 'off',
      'no-continue': 'off',
      'no-extra-parens': 'off',
      'no-import-assign': 'error',
      'no-multi-str': 'off',
      'no-nested-ternary': 'warn',
      'no-param-reassign': [
        'warn',
        {
          props: false,
        },
      ],
      'no-plusplus': 'off',
      'no-restricted-syntax': [
        'off',
      ],
      'no-underscore-dangle': 'off',
      'no-void': [
        'off',
        {
          allowAsStatement: true,
        },
      ],
      'object-curly-newline': 'off',
      'polyfill-hq/no-relative-parent-imports': [
        'warn',
        {
          prefix: '@',
          rootDir: 'src',
        },
      ],
      'quote-props': [
        'warn',
        'consistent-as-needed',
      ],
      'quotes': 'off',
      'sort-imports': 'off',
      'space-infix-ops': 'warn',
    },
  },
];
