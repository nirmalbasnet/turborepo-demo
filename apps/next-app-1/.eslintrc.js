module.exports = {
  extends: ['@packages/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
