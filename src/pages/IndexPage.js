import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { DefaultContainer } from '../layouts/DefaultContainer';

export const IndexPage = () => (
  <DefaultContainer>
    <Jumbotron>
      <h1>Welcome to my app</h1>
      <p>
        <Button color="success" size="large" onClick={console.log}>
          Button
        </Button>
      </p>
    </Jumbotron>
  </DefaultContainer>
);
