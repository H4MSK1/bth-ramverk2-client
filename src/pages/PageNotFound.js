import React from 'react';
import { Jumbotron } from 'reactstrap';
import { DefaultContainer } from 'layouts/DefaultContainer';

const PageNotFound = ({ body }) => (
  <DefaultContainer>
    <Jumbotron className="bg-secondary box-shadow">
      <h1 className="display-3">404 Error</h1>
      {body && (
        <React.Fragment>
          <hr className="my-2" />
          <p>{body}</p>
        </React.Fragment>
      )}
    </Jumbotron>
  </DefaultContainer>
);

export default PageNotFound;
