module.exports = {
  extends: ['@packages/eslint-config/server.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
