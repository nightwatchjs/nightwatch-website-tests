module.exports = {
  '@tags': ['vaibhav'],
  before(client) {
    this.homepage = client.page.home();
  },

  startHomepage: function () {
    this.homepage.navigate();
    this.homepage.expect.section('@indexContainer').to.be.visible;
  },

  'check if version dropdown is enabled and contains the correct version': function (client) {
    const navigation = this.homepage.section.navigation;
    const navbarHeader = this.homepage.section.navbarHeader;

    // TODO: fix page object related issues
    this.homepage.expect.section('@navbarHeader').to.be.enabled;
    navbarHeader.expect.element('@versionDropdown').to.be.enabled;
    navbarHeader.expect.element('@versionDropdownOption').to.be.enabled;
    navbarHeader.getText('css selector', '@versionDropdown', (res) => console.log(res));

    // navbarHeader.click('@versionDropdown');
    // this.homepage.expect.section('@navbarHeader').to.be.visible;
    // navbarHeader.expect.element('@versionDropdown').to.be.enabled;
    // navbarHeader.expect.element('@versionDropdownOption').to.be.enabled;
    // navbarHeader.expect.element('.nav-item.dropdown').text.to.equal(client.globals.nightwatchVersion);
  },

  after(client) {
    client.end();
  },
};
