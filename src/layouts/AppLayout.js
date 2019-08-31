import React from 'react';
import Navbar from '../navigation/Navbar';
import { DefaultContainer } from './DefaultContainer';

const Header = () => (
  <DefaultContainer noPadding>
    <Navbar />
  </DefaultContainer>
);

const Footer = () => (
  <DefaultContainer>
    <footer className="footer">footer text</footer>
  </DefaultContainer>
);

export const AppLayout = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer />
  </React.Fragment>
);
