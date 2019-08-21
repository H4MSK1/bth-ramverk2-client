import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export const DefaultContainer = ({ fluid = false, children, ...props }) => (
  <Container fluid={fluid} {...props}>
    <Row>
      <Col>{children}</Col>
    </Row>
  </Container>
);
