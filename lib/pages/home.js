module.exports = {
  url: '/',
  commands: [],
  elements: {
    indexContainer: '#index-container'
  },
  sections: {
    navigation: {
      selector: '#navigation'
    },
    navbarHeader: {
      selector: '.navbar-nav.ml-md-auto.nav.navbar-right',
      index: 1,

      elements: {
        versionDropdown: '#bd-versions',
        versionDropdownOption: {
          selector: '.dropdown-item'
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
