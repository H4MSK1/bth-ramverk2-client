import React from 'react';
import { Jumbotron } from 'reactstrap';
import { DefaultContainer } from '../layouts/DefaultContainer';
import RegisterForm from '../forms/RegisterForm';

const RegisterPage = () => {
  const onSubmit = formValues => {
    console.log(formValues);
  };

  return (
    <DefaultContainer>
      <Jumbotron>
        <RegisterForm onSubmit={onSubmit} />
      </Jumbotron>
    </DefaultContainer>
  );
};

export default RegisterPage;
