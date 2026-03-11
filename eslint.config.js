import baseConfig from './index.js';

export default baseConfig.append(
  {
    ignores: ['templates/'],
  },
  {
    // files: ['*.js', 'eslint.config.js'],
    rules: {
      'import/extensions': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
  },
);
