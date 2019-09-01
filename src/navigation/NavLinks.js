const createLink = (to, name, exact = true, props = {}) => ({
  to,
  name,
  exact,
  ...props,
});

export const NavLinks = [
  createLink('/', 'Start'),
  createLink('/register', 'Register'),
  createLink('/reports/week/1', 'Kmom01'),
];
