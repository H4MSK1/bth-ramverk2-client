import React from 'react';
import Navbar from '../navigation/Navbar';
import { DefaultContainer } from './DefaultContainer';

const Header = () => (
  <DefaultContainer>
    <Navbar />
  </DefaultContainer>
);

const Footer = () => (
  <DefaultContainer>
    <footer className="footer">footer text</footer>
  </DefaultContainer>
);

export const AppLayout = ({ children }) => (
  <DefaultContainer fluid>
    <Header />
    {children}
    <Footer />
  </DefaultContainer>
);
