import React from 'react';
import { Jumbotron } from 'reactstrap';
import { DefaultContainer } from 'layouts/DefaultContainer';
import { LoginForm } from 'forms/login';
import ApiClient from 'api';
import TokenService from 'api/TokenService';

const LoginPage = ({ history }) => {
  const onSubmit = formValues => {
    const { username, password } = formValues;
    const payload = { username, password };

    ApiClient.post('/login', payload)
      .then(res => {
        const { access_token } = res.data;
        TokenService.setAccessToken(access_token);
        history.push('/');
      })
      .catch(console.error);
  };

  return (
    <DefaultContainer
      column={{
        xs: 12,
        md: { size: 8, offset: 2 },
        lg: { size: 6, offset: 3 },
      }}
    >
      <Jumbotron className="bg-secondary box-shadow">
        <h2>Login</h2>
        <LoginForm onSubmit={onSubmit} />
      </Jumbotron>
    </DefaultContainer>
  );
};

export default LoginPage;
