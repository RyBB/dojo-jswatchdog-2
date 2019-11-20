# dojo-jswatchdog

Auto review tool for kintone JS customization for kintone dojo. <br/>

https://rybb.github.io/dojo-jswatchdog-2/ <br/>

※ Clone [jswatchdog](https://github.com/kintone/jswatchdog).

## Another Version

Tab size of 4 spaces is here.
https://github.com/RyBB/dojo-jswatchdog-4

## Change point

- eslintconfig.js
  - "indent": [2, 2, {"SwitchCase": true}] / "indent": [2, 4, {"SwitchCase": true}]
- main.js
  - editor.getSession().setTabSize(2) / editor.getSession().setTabSize(4)

## Copyright

Follow jswatchdog. <br/>

> Copyright(c) Cybozu, Inc.

## License

Follow jswatchdog. <br/>

> * jswatchdog - MIT Licence
> * ESLint - MIT License
> https://github.com/eslint/eslint/blob/master/LICENSE
> JSHint - MIT License
> https://github.com/jshint/jshint/blob/master/LICENSE
> * JSPrime - MIT License
> https://github.com/dpnishant/jsprime/blob/master/LICENSE
> * Ace Editor - BSD 3-Clause License
> https://github.com/ajaxorg/ace/blob/master/LICENSE