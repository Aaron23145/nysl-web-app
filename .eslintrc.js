module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-param-reassign': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
