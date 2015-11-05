#!/usr/bin/env node

var Executor = require('./test_util').Executor;
var ptor = 'node node_modules/protractor/lib/cli.js ';

var passingTests = [
    ptor + 'spec/consolePassConfig.js'
];

var executor = new Executor();

passingTests.forEach(function(passing_test) {
  executor.addCommandlineTest(passing_test)
      .assertExitCodeOnly();
});

/*************************
 *Below are failure tests*
 *************************/

executor.addCommandlineTest(
  ptor + 'spec/consoleFailConfig.js')
  .expectExitCode(1)
  .expectErrors([
    {message: 'This is a test warning'},
    {message: 'This is a test error'},
    {message: 'This should be filtered out by string'},
    {message: 'This should be filtered out by regex'}
  ]);

executor.addCommandlineTest(
  ptor + 'spec/consoleFailErrorConfig.js')
  .expectExitCode(1)
  .expectErrors([
    {message: 'This is a test error'},
    {message: 'This should be filtered out by string'},
    {message: 'This should be filtered out by regex'}
  ]);

executor.addCommandlineTest(
  ptor + 'spec/consoleFailWarningConfig.js')
  .expectExitCode(1)
  .expectErrors([
    {message: 'This is a test warning'}
  ]);

executor.addCommandlineTest(
  ptor + 'spec/consoleFailFilterConfig.js')
  .expectExitCode(1)
  .expectErrors([
    {message: 'This is a test error'}
  ]);

executor.execute();
