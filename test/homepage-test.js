module.exports = {
  before(client) {
    this.homepage = client.page.home();
  },

  startHomepage(client) {
    this.homepage.navigate();
    this.homepage.expect.section('@indexContainer').to.be.visible;
  },

  'check if version dropdown is enabled and contains the correct version' (client) {
    const navigation = this.homepage.section.navigation;
    const navbarHeader = navigation.section.navbarHeader;

    navbarHeader.expect.element('@versionDropdown').to.be.enabled;
    navbarHeader.expect.element('@versionDropdownOption:first-child').text.to.equal(client.globals.nightwatchVersion);
  },

  after(client) {
    client.end();
  }
};
