const chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['test'],
  page_objects_path : 'lib/pages',
  custom_commands_path : 'lib/custom-commands',
  custom_assertions_path : 'lib/custom-assertions',

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: 'node_modules/.bin/geckodriver',
    cli_args: [
      // Can be used for a faster startup of Firefox, which needs to be started using: firefox -marionette
      // '--connect-existing',
      // '--marionette-port=2828'
    ]
  },

  test_settings: {
    default: {
      desiredCapabilities : {
        browserName : 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true
        }
      },

      launch_url: 'https://nightwatchjs.org',

      globals: {
        // NIGHTWATCH_VERSION is defined as an environment variable (.env files are supported also)
        nightwatchVersion: '${NIGHTWATCH_VERSION}'
      }
    },

    firefox: {

    },

    safari: {
      desiredCapabilities : {
        browserName : 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        port: 4445,
        server_path: '/usr/bin/safaridriver'
      }
    },

    chrome: {
      desiredCapabilities : {
        browserName : 'chrome'
      },
      webdriver: {
        port: 9515,
        server_path: chromedriver.path
      }
    }
  }
};
