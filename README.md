Console Plugin (Chrome only)
============================

This plugin checks the browser log after each test for warnings and errors.  It
can be configured to fail a test if either is detected.  There is also an
optional exclude parameter which accepts both regex and strings.  Any log
matching the exclude parameter will not fail the test or be logged to the
console. A false setting to logWarnings also overrides the failOnWarning setting.

```js
exports.config = {
  plugins: [{
    package: 'protractor-console-plugin',
    failOnWarning: {Boolean}                (Default - false),
    failOnError: {Boolean}                  (Default - true),
    logWarnings: {Boolean}                  (Default - true),
    exclude: {Array of strings and regex}   (Default - [])
  }]
};
```

Note that this plugin's behavior is undefined on browsers other than Chrome.
Firefox users have reported flaky results.
