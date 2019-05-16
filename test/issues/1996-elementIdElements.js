module.exports = {
  before(client) {
    this.homepage = client.page.home();
  },

  async startHomepage(client) {
    this.homepage.navigate();
    this.homepage.expect.section('@indexContainer').to.be.visible;

    const topElementResult = await client.element('css selector', '#navbar-toprightindex select');
    client.assert.ok(client.WEBDRIVER_ELEMENT_ID in topElementResult.value, `The Webdriver Element Id ${client.WEBDRIVER_ELEMENT_ID} is found in the result`);

    this.topElementId = topElementResult.value[client.WEBDRIVER_ELEMENT_ID];
  },

  'check if elementIdElements works as expected': async function(client) {
    const dropdownResult = await client.elementIdElements(this.topElementId, 'css selector', 'option');
    client.assert.equal(dropdownResult.value.length, 2, 'There are two option elements in the drop down');
  },

  'check if elementIdElement (single) works as expected': async function(client) {
    const dropdownResult = await client.elementIdElement(this.topElementId, 'css selector', 'option');
    client.assert.ok(client.WEBDRIVER_ELEMENT_ID in dropdownResult.value, `The Webdriver Element Id ${client.WEBDRIVER_ELEMENT_ID} is found in the dropdown result`);
  },

  'check if elementIdElements works as expected on page objects': async function() {
    const navigation = this.homepage.section.navigation;
    const navbarHeader = navigation.section.navbarHeader;

    const result = await navbarHeader.api.elementIdElements('@versionDropdown', 'css selector', 'option');
    navbarHeader.assert.equal(result.value.length, 2, 'There are two option elements in the drop down');
  },

  'check if elementIdElement (single) works as expected on page objects': async function(client) {
    const navigation = this.homepage.section.navigation;
    const navbarHeader = navigation.section.navbarHeader;

    const result = await navbarHeader.api.elementIdElement('@versionDropdown', 'css selector', 'option');
    client.assert.ok(client.WEBDRIVER_ELEMENT_ID in result.value, `The Webdriver Element Id ${client.WEBDRIVER_ELEMENT_ID} is found in the result`);
  },

  after(client) {
    client.end();
  }
};
