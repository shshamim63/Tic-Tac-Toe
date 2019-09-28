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
    "import/extensions": "off",
    "arrow-parens": "off",
    "no-param-reassign": "off",
    "no-use-before-define": "off",
    "import/no-cycle": "off",
  },
};
