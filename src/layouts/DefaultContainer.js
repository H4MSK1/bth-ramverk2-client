import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const styles = ({ noPadding = false }) => ({
  style: {
    padding: noPadding && 0,
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
