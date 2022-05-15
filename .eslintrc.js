module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
  },
  extends: [
    "@nuxtjs",
    'prettier',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
};
