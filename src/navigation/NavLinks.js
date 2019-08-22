const createLink = (to, name, exact = false, props = {}) => ({
  to,
  name,
  exact,
  ...props,
});

export const NavLinks = [
  createLink('/', 'Start', true),
  createLink('/reports/week/1', 'Kmom01', true),
];
