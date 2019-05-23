module.exports = {
  //url: '/__e2e/window/',
  url: 'http://new.nightwatchjs.org/__e2e/window/',
  commands: [{
    login() {
      this
        .waitForElementVisible('form', 3000)
        .setValue('@email', 'email@example.org')
        .clearValue('#exampleInputPassword1')
        .setValue('#exampleInputPassword1', 'password');

      this.api.pause(700)
        .elements('css selector', 'body', res => {
          this.clearValue('#exampleInputPassword1')
        })
        .click('button[type=submit]');
    }
  }],

  elements: {
    container: '#releases-container',
    openWindowBttn: '#openWindowBttn',
    email: '#exampleInputEmail1'
  }
};
