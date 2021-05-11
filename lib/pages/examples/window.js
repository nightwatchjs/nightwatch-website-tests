module.exports = {
  //url: '/__e2e/window/',
  url: 'https://nightwatchjs.org/__e2e/window/',
  commands: [
    {
      login() {
        this.waitForElementPresent('form', 5000)
          .setValue('@email', 'email@example.org')
          .clearValue('@password')
          .setValue('@password', 'password');

        this.api
          .pause(700)
          .elements('css selector', 'body', () => {
            this.clearValue('@password');
          })
          .click('button[type=submit]');
      },
    },
  ],

  elements: {
    container: '#releases-container',
    openWindowBttn: '#openWindowBttn',
    email: '#exampleInputEmail1',
    password: '#exampleInputPassword1',
  },
};
