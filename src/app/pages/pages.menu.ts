export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        data: {
          menu: {
            title: 'Home',
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
                title: 'Me',
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
      }
    ]
  }
];
