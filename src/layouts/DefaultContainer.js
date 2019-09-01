import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const styles = ({ padding = false }) => ({
  style: {
    padding: padding && padding,
  },
});

export const DefaultContainer = ({
  keepContainer = false,
  children,
  ...props
}) => (
  <Container {...styles(props)} {...props}>
    {keepContainer ? (
      children
    ) : (
      <Row>
        <Col>{children}</Col>
      </Row>
    )}
  </Container>
);
