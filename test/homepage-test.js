module.exports = {
  before(client) {
    this.homepage = client.page.home();
  },

  startHomepage: function() {
    this.homepage.navigate();

    this.homepage.expect.section('@indexContainer').to.be.visible;
  },

  'check if version dropdown is enabled and contains the correct version' (client) {
    const navigation = this.homepage.section.navigation;
    const navbarHeader = navigation.section.navbarHeader;

    navbarHeader.expect.element('@versionDropdown').to.be.enabled;
    navbarHeader.expect.element('@versionDropdownOption:first-child').text.to.equal(client.globals.nightwatchVersion);
  },

  startHomepageAsync: async function (client) {
    await client.openHomepage();

    this.homepage.expect.section('@indexContainer').to.be.visible;
  },

  after(client) {
    client.end();
  }
};
