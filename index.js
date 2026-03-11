import antfu from '@antfu/eslint-config';
import betterMaxParamsPlugin from 'eslint-plugin-better-max-params';
import filenameExportPlugin from 'eslint-plugin-filename-export';
import globals from 'globals';

export default antfu(
  {
    typescript: true,
    ignores: ['dist/', 'build/'],
  },
  {
    plugins: {
      'filename-export': filenameExportPlugin,
      'better-max-params': betterMaxParamsPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'style/semi': ['error', 'always'],
      'style/comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/array-type': [
        'warn',
        {
          default: 'array',
        },
      ],
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true,
        },
      ],
      '@typescript-eslint/naming-convention': [
        'warn',
      ],
      '@stylistic/no-extra-parens': 'warn',
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
      }],
      'object-curly-newline': 'off',
      '@stylistic/object-curly-newline': ['error', {
        ObjectExpression: {
          multiline: true,
          minProperties: 4,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 4,
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 4,
          consistent: true,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 4,
          consistent: true,
        },
      }],
      '@stylistic/type-annotation-spacing': ['error', {
        before: false,
        after: true,
      }],
      '@typescript-eslint/no-floating-promises': [
        'error',
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
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
      '@typescript-eslint/class-methods-use-this': [
        'off',
      ],
      'consistent-return': [
        'off',
      ],
      'default-case': 'warn',
      'filename-export/match-default-export': 'off',
      'id-length': [
        'warn',
        {
          max: 45,
          min: 1,
        },
      ],
      'import/no-mutable-exports': 'warn',
      'import/prefer-default-export': 'off',
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
      'no-plusplus': 'off',
      'no-nested-ternary': 'warn',
      'no-param-reassign': [
        'warn',
        {
          props: false,
        },
      ],
      'no-restricted-syntax': [
        'off',
      ],
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'off',
      'no-void': [
        'off',
        {
          allowAsStatement: true,
        },
      ],
      'node/no-unsupported-features/es-syntax': 'off',
      'quote-props': [
        'warn',
        'consistent-as-needed',
      ],
      'radix': [
        'error',
        'as-needed',
      ],
      'sort-imports': [
        'warn',
        {
          allowSeparatedGroups: true,
          ignoreDeclarationSort: true,
        },
      ],
      'space-infix-ops': 'warn',
      'better-max-params/better-max-params': ['error', {
        func: 5,
        constructor: 10,
      }],
    },
  },
  {
    files: ['**/*.{js,cjs,mjs,jsx,yaml,yml,json,jsonc,md,mdx}'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/return-await': 'off',
    },
  },
  {
    files: ['**/*.{yaml,yml,json,jsonc,md,mdx}'],
    rules: {
      'filename-export/match-default-export': 'off',
    },
  },
  {
    files: ['**/*.md/*', '**/*.mdx/*'],
    rules: {
      'filename-export/match-default-export': 'off',
    },
  },
);
