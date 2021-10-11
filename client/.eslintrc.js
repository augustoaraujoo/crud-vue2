module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'prefer-destructuring': 'off',
    'no-unused-vars': 'off',
    'linebreak-style':'off',
    'eol-last': 'off',
    'no-useless-return': 'off',
    'import/extensions': 'off',
    'no-trailing-spaces' : 'off',
    'no-trailing-spaces': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};