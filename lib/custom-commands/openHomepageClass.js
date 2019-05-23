const assert = require('assert');

module.exports = class {
  async command () {
    this.api.init();
    this.api.waitForElementVisible('section#index-container');

    const result = await this.api.elements('css selector', '#index-container ul.features li');
    assert.strictEqual(result.value.length, 7, 'Feature elements number is correct');
  }
};
