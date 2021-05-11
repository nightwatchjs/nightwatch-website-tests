module.exports = {
  start(client) {
    this.page = client.page.examples.window();
    this.page.navigate().assert.elementPresent('@container');
  },

  demoAsync: async function (browser) {
    const result = await browser.getText('#releases-container h1');
    browser.assert.equal(result.value, 'Sample E2E Tests');
  },

  // TODO: fix safari case failing
  // 'demo switch window and login form': function (browser) {
  //   this.page.click('@openWindowBttn');

  //   browser.windowHandles(function (result) {
  //     browser.assert.strictEqual(result.value.length, 2);
  //     browser.switchWindow(result.value[1]);
  //   });

  //   this.page.login();
  // },

  after: (client) => client.end(),
};
