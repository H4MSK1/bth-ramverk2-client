import React from 'react';
import { Jumbotron } from 'reactstrap';
import { DefaultContainer } from '../layouts/DefaultContainer';

const ReportPage = ({ match }) => {
  const { kmom } = match.params;

  return (
    <DefaultContainer>
      <Jumbotron>
        <h1>kmom {kmom.padStart(2, 0)}</h1>
      </Jumbotron>
    </DefaultContainer>
  );
};

export default ReportPage;
