module.exports = {
  before: function (client) {
    client.page.home().navigate();
  },

  'Passing without page object providing Array': function (client) {
    const dataForCommand = ['foo'];

    client.customExecute(dataForCommand);
  },

  'Passing with a string': function (client) {
    const dataForCommand = 'foo';

    client.page.home().customExecute(dataForCommand);
  },

  'Failing with an Array': function (client) {
    const dataForCommand = ['foo']; // will also fail using object: { foo: 'bar' }

    client.page.home().customExecute(dataForCommand);
  },

  after: client => client.end()
};
