module.exports = {
  command: async function () {
    this.url('http://nightwatchjs.org');
    this.waitForElementVisible('section#index-container');

    const result = await this.elements('css selector', '#index-container ul.features li');
    this.assert.strictEqual(result.value.length, 7, 'Feature elements number is correct');
  }
};
