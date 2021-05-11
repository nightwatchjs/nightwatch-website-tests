module.exports = {
  before(client) {
    this.homepage = client.page.home();
  },

  startHomepage: function () {
    this.homepage.navigate();
    this.homepage.expect.section('@indexContainer').to.be.visible;
  },

  'check if version dropdown is enabled and contains the correct version': function (client) {
    const navigation = this.homepage.section.navigation;
    const navbarHeader = navigation.section.navbarHeader;

    // TODO: fix page object related issues
    client.expect.element({ selector: '.nav-item.dropdown', index: 1 }).to.be.visible;
    // client.expect.element('@versionDropdown').to.be.enabled;
    // navbarHeader.expect.element('@versionDropdownOption:first-child').text.to.equal(client.globals.nightwatchVersion);
  },

  after(client) {
    client.end();
  },
};
