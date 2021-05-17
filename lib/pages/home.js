module.exports = {
  url: '/',
  commands: [],
  elements: {
    indexContainer: '#index-container',
  },
  sections: {
    navigation: {
      selector: '#navigation',
    },
    navbarHeader: {
      selector: '.navbar-nav.ml-md-auto.nav.navbar-right',

      elements: {
        versionDropdown: {
          selector: '.nav-item.dropdown',
          index: 1,
        },
        versionDropdownOption: '.dropdown-item',
      },
    },
    indexContainer: {
      selector: '#index-container',
      sections: {
        download: {
          selector: '.download',
          elements: {
            installButton: '.btn-download',
          },
        },
      },
    },
  },
};
