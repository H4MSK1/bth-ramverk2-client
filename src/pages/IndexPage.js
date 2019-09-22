import React from 'react';
import { Jumbotron } from 'reactstrap';
import { DefaultContainer } from 'layouts/DefaultContainer';
import ApiClient from 'api/client';

const IndexPage = () => {
  const [body, setBody] = React.useState('');

  React.useEffect(() => {
    ApiClient.get('/')
      .then(res => {
        setBody(res.data.data);
      })
      .catch(console.error);
  });

  return (
    <DefaultContainer>
      <Jumbotron className="bg-secondary box-shadow">
        <h2>Välkommen till min me-sida</h2>
        <p>{body}</p>
      </Jumbotron>
    </DefaultContainer>
  );
};

export default IndexPage;
