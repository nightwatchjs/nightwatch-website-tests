const util = require('util');

exports.assertion = function(selector, expectedItemsNo, msg) {
  this.selector = selector;
  this.message = msg || util.format('Testing if there are %s elements found for selector <%s>', expectedItemsNo, selector);
  this.expected = expectedItemsNo;

  this.pass = function(value) {
    return value === expectedItemsNo;
  };

  this.value = function(result) {
    return result.value.length;
  };

  /**
   * If defined, the failure method will be called before the assertion is evaluated,
   *  with the result from the command
   *
   * The return is a boolean indicating if there's a failure and in which case,
   *  it will be shown as such by the reporter
   *
   * @param result
   * @return {boolean}
   */
  this.failure = function(result) {
    const failed = (result === false) ||
      // no such element
      result && (result.status === -1 || result.value === null);

    if (failed) {
      this.message += ' No elements were returned.';
    }

    return failed;
  };

  this.command = function(callback) {
    this.api.elements(this.client.locateStrategy, this.selector, function(result) {
      // evaluating the assertion:
      // 1. if there's a .failure() method, call it
      // 2. call the .value() method to retrieve the desired value from the result object
      // 3. call the .pass() method to determine the assertion result
      callback(result);
    });
  };
};
