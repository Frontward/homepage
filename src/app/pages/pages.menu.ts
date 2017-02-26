export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'start',
        data: {
          menu: {
            title: 'Start',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'about',
        data: {
          menu: {
            title: 'About',
            icon: 'ion-information-circled',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'author',
            data: {
              menu: {
                title: 'What we do',
              }
            }
          },
          {
            path: 'company',
            data: {
              menu: {
                title: 'Company',
              }
            }
          }
        ]
      },
      {
        path: 'contact',
        data: {
          menu: {
            title: 'Contact',
            icon: 'ion-android-contact',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }
    ]
  }
];
