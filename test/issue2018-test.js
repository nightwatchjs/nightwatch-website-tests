module.exports = {
  before: function (client) {
    client.page.home().navigate();
  },
  'Passing without page object provding Array': function (client) {
    const dataForCommand = ['foo'];
    client.customCommand(dataForCommand);
  },
  'Passing with a sring': function (client) {
    const dataForCommand = 'foo';
    client.page.home()
      .customCommand(dataForCommand);
  },
  'Failing with an Array': function (client) {
    const dataForCommand = ['foo']; // will also fail using object: { foo: 'bar' }
    client.page.home()
      .customCommand(dataForCommand)
      .api.end();
  },
};
