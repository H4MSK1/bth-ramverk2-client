import React from 'react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar as BaseNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLinks } from './NavLinks';

const Navbar = ({ isOpen = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(isOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(state => !state);

  const NavItemLink = ({ route: { exact = false, to, name }, ...props }) => (
    <NavItem {...props}>
      <NavLink
        tag={ReactRouterNavLink}
        exact={exact}
        to={to}
        activeClassName="active"
      >
        {name}
      </NavLink>
    </NavItem>
  );

  return (
    <BaseNavbar color="inverse" light expand="md">
      <NavbarBrand tag={ReactRouterNavLink} to="/">
        {process.env.REACT_APP_NAME}
      </NavbarBrand>
      <NavbarToggler onClick={toggleMobileMenu} />
      <Collapse isOpen={isMobileMenuOpen} navbar>
        <Nav className="ml-auto" navbar>
          {NavLinks.map((item, index) => (
            <NavItemLink route={item} key={index} />
          ))}
        </Nav>
      </Collapse>
    </BaseNavbar>
  );
};

export default Navbar;
