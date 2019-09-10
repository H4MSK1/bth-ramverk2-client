import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export const DefaultContainer = ({
  keepContainer = false,
  children,
  padding,
  ...props
}) => (
  <Container style={{ padding }} {...props}>
    {keepContainer ? (
      children
    ) : (
      <Row>
        <Col>{children}</Col>
      </Row>
    )}
  </Container>
);
