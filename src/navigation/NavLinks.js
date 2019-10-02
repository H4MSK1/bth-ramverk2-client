export const NavLinks = [
  {
    to: '/',
    name: 'Start',
    exact: true,
  },
  {
    to: '/chat',
    name: 'Chat',
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
    to: '/reports/create',
    name: 'Create new report',
    exact: true,
    onlyAuth: true,
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
      },
      {
        to: '/reports/week/4',
        name: 'Kmom04',
      },
      {
        to: '/reports/week/5',
        name: 'Kmom05',
      },
      {
        to: '/reports/week/6',
        name: 'Kmom06',
      },
    ],
  },
];
