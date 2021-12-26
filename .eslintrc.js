module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {},
};
