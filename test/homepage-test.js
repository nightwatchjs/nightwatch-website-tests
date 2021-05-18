module.exports = {
  before(client) {
    this.homepage = client.page.home();
  },

  startHomepage: function () {
    this.homepage.navigate();
    this.homepage.expect.section('@indexContainer').to.be.visible;
  },

  'check if version dropdown is enabled and contains the correct version': function () {
    const navbarHeader = this.homepage.section.navbarHeader;

    this.homepage.expect.section('@navbarHeader').to.be.enabled;
    navbarHeader.expect.element('@versionDropdown').to.be.visible;
    navbarHeader.expect.element('@versionDropdown').text.to.equal('1.6.2');
    navbarHeader.expect.elements('@versionDropdownOption').count.to.equal(5);
  },

  after(client) {
    client.end();
  }
};
