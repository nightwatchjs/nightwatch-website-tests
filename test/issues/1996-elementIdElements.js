module.exports = {
  before(client) {
    this.homepage = client.page.home();
  },

  async startHomepage(client) {
    this.homepage.navigate();
    this.homepage.expect.section('@indexContainer').to.be.visible;

    const topElementResult = await client.element('css selector', '.nav-item.dropdown');

    let key = Object.keys(topElementResult.value)[0];
    let elementID = topElementResult.value[key];

    client.assert.ok(key in topElementResult.value, `The Element Id ${key} is found in the result`);

    this.topElementId = elementID;
  },

  'check if elementIdElements works as expected': async function (client) {
    const dropdownResult = await client.elementIdElements(
      this.topElementId,
      'css selector',
      'a[class="dropdown-item"]'
    );
    client.assert.equal(dropdownResult.value.length, 4, 'There are two option elements in the drop down');
  },

  'check if elementIdElement (single) works as expected': async function (client) {
    const dropdownResult = await client.elementIdElement(this.topElementId, 'css selector', 'a[class="dropdown-item"]');

    let key = Object.keys(dropdownResult.value)[0];

    client.assert.ok(
      key in dropdownResult.value,
      `The Webdriver Element Id ${client.WEBDRIVER_ELEMENT_ID} is found in the dropdown result`
    );
  },

  // TODO:: Fix after fixing page object
  // 'check if elementIdElements works as expected on page objects': async function () {
  //   const navigation = this.homepage.section.navigation;
  //   const navbarHeader = navigation.section.navbarHeader;

  //   const result = await navbarHeader.api.elementIdElements('@versionDropdown', 'css selector', 'option');
  //   navbarHeader.assert.equal(result.value.length, 2, 'There are two option elements in the drop down');
  // },

  // 'check if elementIdElement (single) works as expected on page objects': async function (client) {
  //   const navigation = this.homepage.section.navigation;
  //   const navbarHeader = navigation.section.navbarHeader;

  //   const result = await navbarHeader.api.elementIdElement('@versionDropdown', 'css selector', 'option');
  //   client.assert.ok(
  //     client.WEBDRIVER_ELEMENT_ID in result.value,
  //     `The Webdriver Element Id ${client.WEBDRIVER_ELEMENT_ID} is found in the result`
  //   );
  // },

  after(client) {
    client.end();
  },
};
