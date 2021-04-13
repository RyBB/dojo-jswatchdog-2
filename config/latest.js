module.exports = {
  "extends": ["@cybozu", "@cybozu/eslint-config/globals/kintone"],
  "plugins": ["xss"],
  "globals": {
    "garoon": true,
    "axios": true,
  },
  "rules": {
    "xss/no-mixed-html": 2,
    "xss/no-location-href-assign": 2,
    "arrow-parens": 2,
    "arrow-spacing": 1,
    "prefer-arrow-callback": 0,
  },
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "env": {
    "es2020": true
  }
};