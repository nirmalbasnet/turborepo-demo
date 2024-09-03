const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'turbo',
    require.resolve('@vercel/style-guide/eslint/react'),
  ],
  plugins: ['only-warn'],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    'dist/',
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ['*.js?(x)', '*.ts?(x)'] },
  ],
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'FunctionDeclaration',
        message:
          'Function declarations are not allowed. Use arrow functions instead.',
      },
      {
        selector: 'FunctionExpression',
        message:
          'Function expressions are not allowed. Use arrow functions instead.',
      },
    ],
    'no-console': 'warn', // Warns if `console` statements are used. Helpful for catching debug code before production.
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Reports unused variables, but ignores variables that start with `_` (often used for intentionally unused parameters).
    semi: ['error', 'always'], // Enforces the use of semicolons at the end of statements.
    quotes: ['error', 'single'], // Enforces the use of single quotes for strings.
    indent: ['error', 2], // Enforces a consistent indentation style (2 spaces in this case).
  },
};
