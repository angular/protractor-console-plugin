describe('console plugin', function() {

  var logMessageButton = element(by.id('log-message'));
  var warningMessageButton = element(by.id('simulate-warning'));
  var deleteMessageButton = element(by.id('simulate-error'));

  it('should fail on warning message', function() {
    browser.get('/');
    warningMessageButton.click();
  });

  it('should fail on error message', function() {
    browser.get('/');
    deleteMessageButton.click();
  });

  it('should not fail on log and debug messages', function() {
    browser.get('/');
    logMessageButton.click();
  });
});
