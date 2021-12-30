module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'function-paren-newline': 'off',
    'import/prefer-default-export': 'off',
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'off',
  },
};
