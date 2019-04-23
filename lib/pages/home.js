module.exports = {
  url: '/',
  commands: [],

  sections: {
    navigation: {
      selector: '#navigation',

      sections: {
        navbarHeader: {
          selector: '.navbar-header',

          elements: {
            versionDropdown: 'select.version-dropdown',
            versionDropdownOption: 'select.version-dropdown option'
          }
        }
      }
    },

    indexContainer: {
      selector: '#index-container',
      sections: {
        download: {
          selector: '.download',
          elements: {
            installButton: '.btn-download'
          }
        }
      }
    }
  }
};
