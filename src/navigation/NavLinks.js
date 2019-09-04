export const NavLinks = [
  {
    to: '/',
    name: 'Start',
    exact: true,
  },
  {
    to: '/register',
    name: 'Register',
    exact: true,
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
    ],
  },
];
