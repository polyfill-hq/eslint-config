module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'airbnb/base',
    '@kesills/airbnb-typescript/base',
    'plugin:eslint-comments/recommended',
  ],

  plugins: [
    'eslint-plugin-filename-export',
    'better-max-params',
    '@stylistic',
  ],
  env: {
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['dist', 'build'],

  rules: {
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
    '@stylistic/type-annotation-spacing': [
      'error',
      {
        after: true,
        before: false,
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
      'warn',
    ],
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
    'better-max-params/better-max-params': [
      'error',
      {
        constructor: 10,
        func: 5,
      },
    ],
    'class-methods-use-this': [
      'off',
    ],
    'consistent-return': [
      'off',
    ],
    'default-case': 'warn',
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
    'filename-export/match-default-export': 'error',
    'id-length': [
      'warn',
      {
        max: 45,
        min: 1,
      },
    ],
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'scripts/**',
          'test*/**',
          '*',
        ],
      },
    ],
    'import/no-mutable-exports': 'warn',
    'import/no-unresolved': 'error',
    'import/order': [
      'warn',
      {
        'alphabetize': {
          caseInsensitive: true,
          order: 'asc',
        },
        'groups': [
          'builtin',
          'external',
          [
            'internal',
            'sibling',
            'parent',
          ],
          'index',
          'unknown',
        ],
        'newlines-between': 'always',
      },
    ],
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
    'no-unused-vars': 'off',
    'no-void': [
      'off',
      {
        allowAsStatement: true,
      },
    ],
    'node/no-unsupported-features/es-syntax': 'off',
    'object-curly-newline': 'off',
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
  },
};
