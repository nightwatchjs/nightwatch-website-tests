# Nightwatch.js Website Tests


[![npm](https://img.shields.io/npm/v/nightwatch.svg)](https://www.npmjs.com/package/nightwatch)
[![Build Status](https://travis-ci.org/nightwatchjs/nightwatch.svg?branch=master)](https://travis-ci.org/nightwatchjs/nightwatch) 
[![Coverage Status](https://coveralls.io/repos/nightwatchjs/nightwatch/badge.svg?branch=master&service=github)](https://coveralls.io/github/nightwatchjs/nightwatch?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/nightwatchjs/nightwatch.svg)](https://greenkeeper.io/)
***
Nightwatch.js example tests which run against the [Nightwatch.js](http://nightwatchjs.org) documentation website, using Firefox.

## 1. Install Firefox
Visit the Mozilla Firefox website: https://www.mozilla.org/en-US/firefox/new/

## 2. git clone
This will clone the project, install Nightwatch and also the GeckoDriver which is required to interact with the Firefox browser.
No Selenium Server is required.

```sh
$ git clone https://github.com/nightwatchjs/nightwatch-website-tests.git
$ cd nightwatch-website-tests
$ npm install
```

### Geckodriver documentation
Geckodriver is a proxy for using [W3C WebDriver](https://www.w3.org/TR/webdriver1/)-compatible clients to interact with Gecko-based browsers, such as Firefox.

Documentation is available at:
https://firefox-source-docs.mozilla.org/testing/geckodriver/index.html

## 3. Run tests
To run the tests using Firefox simply run the command:

```sh
$ npm test
```

## Changelog
The release history and changelog is available on the [GitHub Releases](https://github.com/nightwatchjs/nightwatch/releases) page.

## Updates
We use [Twitter](https://twitter.com/nightwatchjs) to communicate updates regarding development and to announce releases. Follow [@nightwatchjs](https://twitter.com/nightwatchjs) to get the latest or if you wish to get in touch. 

## Support Nightwatch on OpenCollective
Please consider supporting Nightwatch by becoming a backer on the [OpenCollective](https://opencollective.com/nightwatch/) platform.

[![Open Collective](https://opencollective.com/nightwatch/tiers/backers.svg?avatarHeight=60)](https://opencollective.com/nightwatch/contribute/tier/7349-backers)
