module.exports = {
  url: '/',
  commands: [],
  elements: {
    indexContainer: '#index-container'
  },
  sections: {
    navigation: {
      selector: '#navigation',

      sections: {
        navbarHeader: {
          selector: '.navbar-header',
          index: 2,

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
