import React from 'react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import {
  Container,
  Collapse,
  Navbar as BaseNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { NavLinks } from './NavLinks';

const Navbar = ({ isOpen = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(isOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(state => !state);

  const NavItemLink = ({
    route: { exact = false, to, name, children = [] },
    ...props
  }) => (
    <React.Fragment {...props}>
      {!children.length ? (
        <NavItem>
          <NavLink
            tag={ReactRouterNavLink}
            exact={exact}
            to={to}
            activeClassName="active"
          >
            {name}
          </NavLink>
        </NavItem>
      ) : (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            {name}
          </DropdownToggle>
          <DropdownMenu right>
            {children.map((child, index) => (
              <DropdownItem key={index} tag={ReactRouterNavLink} to={child.to}>
                {child.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      )}
    </React.Fragment>
  );

  return (
    <BaseNavbar dark expand="md" className="bg-primary">
      <Container>
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
      </Container>
    </BaseNavbar>
  );
};

export default Navbar;
