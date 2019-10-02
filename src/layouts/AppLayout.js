import React from 'react';
import Navbar from 'navigation/Navbar';
import { DefaultContainer } from './DefaultContainer';
import { checkTokenExpiration } from 'api/utils';

const Header = () => (
  <header className="navbar-wrapper">
    <Navbar />
  </header>
);

const Footer = () => (
  <footer className="footer text-light">
    <DefaultContainer>
      This site was created with React & Reactstrap.{' '}
      <a
        href={process.env.REACT_APP_GITHUB_REPOSITORY}
        target="_blank"
        rel="noopener noreferrer"
        className="text-light"
      >
        {process.env.REACT_APP_GITHUB_REPOSITORY}
      </a>
    </DefaultContainer>
  </footer>
);

export const AppLayout = ({ children }) => {
  React.useEffect(() => {
    checkTokenExpiration();
  });

  return (
    <div className="app">
      <Header />

      <main className="main">{children}</main>

      <Footer />
    </div>
  );
};
