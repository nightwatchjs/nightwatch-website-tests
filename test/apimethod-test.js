module.exports = {
  before(client) {
    this.apiPage = client.page.api.page();
    this.apiMethodPage = client.page.api.method.index();
  },

  startHomepage() {
    this.apiPage.navigate();
  },

  'navigate to an individual api method page' (client) {
    this.apiMethodPage.navigate({
      apiMethod: 'clearValue'
    });

    client.expect.title().to.startWith('clearValue');

    this.apiMethodPage.section.container
      .expect.element('@header').text.to.equal('.clearValue()');
  },

  after(client) {
    client.end();
  }
};
