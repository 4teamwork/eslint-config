module.exports = {
  plugins: [
    'cypress',
  ],
  extends: [
    // https://github.com/nuxt/eslint-config/blob/master/packages/eslint-config/index.js
    '@nuxtjs',
    // https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/configs/recommended.js
    'plugin:nuxt/recommended',
    // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/lib/config/recommended.js
    'plugin:cypress/recommended',
  ],
  rules: {
    // require trailing commas in multiline object literals
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    // no space before function parentheses
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    // disallow param reassign
    'no-param-reassign': ['error'],
  },
};
