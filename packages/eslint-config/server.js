const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  env: {
    node: true, // Specifies that the code is intended to run in a Node.js environment.
    es2021: true, // Enables ECMAScript 2021 features.
  },
  extends: [
    'eslint:recommended', // Uses ESLint's recommended rules for general best practices.
    'plugin:node/recommended', // Uses recommended rules from the ESLint Node.js plugin for Node.js specific best practices.
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  parserOptions: {
    ecmaVersion: 12, // Specifies ECMAScript version to be used; 12 corresponds to ES2021.
    sourceType: 'module', // Allows the use of ES modules (import/export syntax).
  },
  rules: {
    'no-console': 'warn', // Warns if `console` statements are used. Helpful for catching debug code before production.
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Reports unused variables, but ignores variables that start with `_` (often used for intentionally unused parameters).
    semi: ['error', 'always'], // Enforces the use of semicolons at the end of statements.
    quotes: ['error', 'single'], // Enforces the use of single quotes for strings.
    indent: ['error', 2], // Enforces a consistent indentation style (2 spaces in this case).
  },
  plugins: [
    'node', // Enables the ESLint plugin for Node.js, providing additional rules for Node.js applications.
  ],
};
