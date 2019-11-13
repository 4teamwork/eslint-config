# @4tw/eslint-config

## Installation

Run the following:

```bash
$ yarn add --dev eslint prettier @4tw/eslint-config
```

Then add this in your `.eslintrc.js`:

```javascript
module.exports = {
  extends: [
    '@4tw',
  ],
}
```

Finally add the `lint` command to your `package.json`:

```javascript
{
  ...
  "scripts": {
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore ."
  }
}
```
