module.exports = {
  "parser": "babel-eslint",
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "rules": {
    "camelcase": ["error", { "properties": "always" }],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "func-call-spacing": ["error", "never"],
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],
    "no-console": "warn",
    "no-debugger": "error",
    "no-dupe-keys": "error",
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "no-unused-vars": 0,
    "no-whitespace-before-property": "error",
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "space-infix-ops": ["error", { "int32Hint": false }]
  }
}