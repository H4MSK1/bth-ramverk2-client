import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export const DefaultContainer = ({ children, ...props }) => (
  <Container {...props}>
    <Row>
      <Col>{children}</Col>
    </Row>
  </Container>
);
