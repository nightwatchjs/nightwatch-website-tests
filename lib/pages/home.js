module.exports = {
  url: '/',
  commands: [],
  elements: {
    indexContainer: '#index-container',
  },
  sections: {
    navigation: {
      selector: '#navigation',

      sections: {
        navbarHeader: {
          selector: '.navbar-nav.navbar-right',
          index: 2,

          elements: {
            versionDropdown: {
              selector: '.nav-item.dropdown',
              index: 1,
            },
            versionDropdownOption: '.nav-item',
          },
        },
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

// #index-container > div > div.parallax__layer.parallax__layer--0 > header > div > ul > li.nav-item.dropdown.show > div

// #index-container > div > div.parallax__layer.parallax__layer--0 > header > div > ul > li.nav-item.dropdown.show
