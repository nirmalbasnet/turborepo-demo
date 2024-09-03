const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'turbo',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['only-warn'],
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
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  rules: {
    'no-console': 'warn', // Warns if `console` statements are used. Helpful for catching debug code before production.
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Reports unused variables, but ignores variables that start with `_` (often used for intentionally unused parameters).
    semi: ['error', 'always'], // Enforces the use of semicolons at the end of statements.
    quotes: ['error', 'single'], // Enforces the use of single quotes for strings.
    indent: ['error', 2], // Enforces a consistent indentation style (2 spaces in this case).
  },
};
