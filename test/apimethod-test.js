module.exports = {
  before(client) {
    this.apiPage = client.page.api.page();
    this.apiMethodPage = client.page.api.method.index();
  },

  startHomepage() {
    this.apiPage.navigate();
  },

  'navigate to an individual api method page': function (client) {
    this.apiMethodPage.navigate({
      apiMethod: 'clearValue'
    });

    client.expect.title().to.startWith('clearValue');

    this.apiMethodPage.section.container.expect.element('@header').text.to.contain('.clearValue()');
  },

  after(client) {
    client.end();
  }
};
