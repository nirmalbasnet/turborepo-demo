/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'prettier',
    'turbo',
  ],
  plugins: ['only-warn'],
  env: {
    node: true, // Enables Node.js global variables
    es2021: true, // Use the latest ECMAScript features
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    'dist/',
  ],
  overrides: [
    // Force ESLint to detect .ts files
    { files: ['*.js', '*.ts'] },
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: ['modules'], // Allows ES module syntax
      },
    ],
    'no-console': 'warn', // Warns if `console` statements are used. Helpful for catching debug code before production.
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Reports unused variables, but ignores variables that start with `_` (often used for intentionally unused parameters).
    semi: ['error', 'always'], // Enforces the use of semicolons at the end of statements.
    quotes: ['error', 'single'], // Enforces the use of single quotes for strings.
    indent: ['error', 2], // Enforces a consistent indentation style (2 spaces in this case).
  },
};
