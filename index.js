module.exports = {
  plugins: ['nuxt', 'cypress', 'prettier'],
  extends: [
    // https://github.com/nuxt/eslint-config/blob/master/packages/eslint-config/index.js
    '@nuxtjs',
    // https://github.com/prettier/eslint-config-prettier/blob/master/index.js
    'prettier',
    // https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/configs/recommended.js
    'plugin:prettier/recommended',
    // https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/configs/recommended.js
    'plugin:nuxt/recommended',
    // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/lib/config/recommended.js
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  rules: {
    // require trailing commas in multiline object literals
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    // no space before function parentheses
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    // disallow param reassign
    'no-param-reassign': ['error'],
    // allow console and debugger when developing
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 'off',
    'standard/no-callback-literal': 'off',
    // Vuetify sometimes uses slot names with a "." (e.g. header.<name>). This
    // prevents eslint from displaying an error for these slots
    'vue/valid-v-slot': 'off',
    // Define a common imports sort order
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: ['builtin', 'external', ['index', 'internal', 'parent', 'sibling']],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
      },
    ],
  },
}
