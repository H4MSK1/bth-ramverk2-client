export const NavLinks = [
  {
    to: '/',
    name: 'Start',
    exact: true,
  },
  {
    to: '/login',
    name: 'Login',
    exact: true,
    onlyGuest: true,
  },
  {
    to: '/register',
    name: 'Register',
    exact: true,
    onlyGuest: true,
  },
  {
    to: '#',
    name: 'Reports',
    children: [
      {
        to: '/reports/week/1',
        name: 'Kmom01',
      },
      {
        to: '/reports/week/2',
        name: 'Kmom02',
      },
      {
        to: '/reports/week/3',
        name: 'Kmom03',
        disabled: true,
      },
      {
        to: '/reports/week/4',
        name: 'Kmom04',
        disabled: true,
      },
      {
        to: '/reports/week/5',
        name: 'Kmom05',
        disabled: true,
      },
      {
        to: '/reports/week/6',
        name: 'Kmom06',
        disabled: true,
      },
      {
        to: '/reports/week/10',
        name: 'Kmom10',
        disabled: true,
      },
    ],
  },
];
