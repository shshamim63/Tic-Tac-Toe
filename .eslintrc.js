module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'import/extensions': 0,
    'arrow-parens': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'import/no-cycle': 0,
  },
};
