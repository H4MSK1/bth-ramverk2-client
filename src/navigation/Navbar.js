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
import { RenderOnlyAuth, RenderOnlyGuest } from 'api/utils';
import TokenService from 'api/TokenService';

const handleLogoutClick = () => {
  TokenService.removeTokens();
  window.location.reload();
};

const Navbar = ({ isOpen = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(isOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(state => !state);

  const NavItemLink = ({
    route: {
      to,
      name,
      exact = false,
      onlyGuest = false,
      onlyAuth = false,
      children = [],
      onClick = () => {},
    },
    ...props
  }) => {
    const item = (
      <React.Fragment {...props}>
        {!children.length ? (
          <NavItem>
            <NavLink
              tag={ReactRouterNavLink}
              exact={exact}
              to={to}
              activeClassName="active"
              onClick={onClick}
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
                <DropdownItem
                  key={index}
                  disabled={child.disabled}
                  tag={ReactRouterNavLink}
                  to={child.to}
                >
                  {child.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        )}
      </React.Fragment>
    );

    if (onlyAuth) {
      return <RenderOnlyAuth>{item}</RenderOnlyAuth>;
    }

    if (onlyGuest) {
      return <RenderOnlyGuest>{item}</RenderOnlyGuest>;
    }

    return item;
  };

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

            <RenderOnlyAuth>
              <NavItem>
                <NavLink href="#" onClick={handleLogoutClick}>
                  <b>SIGN OFF</b>
                </NavLink>
              </NavItem>
            </RenderOnlyAuth>
          </Nav>
        </Collapse>
      </Container>
    </BaseNavbar>
  );
};

export default Navbar;
