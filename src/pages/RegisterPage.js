import React from 'react';
import { Jumbotron } from 'reactstrap';
import { DefaultContainer } from 'layouts/DefaultContainer';
import RegisterForm from 'forms/RegisterForm';

const RegisterPage = () => {
  const onSubmit = formValues => {
    const { name, email, password, year, month, day } = formValues;
    const payload = {
      name,
      email,
      password,
      birthDate: `${year}-${month}-${day}`,
    };

    console.log('TCL: RegisterPage -> payload', payload);
  };

  return (
    <DefaultContainer>
      <Jumbotron className="bg-secondary box-shadow">
        <RegisterForm onSubmit={onSubmit} />
      </Jumbotron>
    </DefaultContainer>
  );
};

export default RegisterPage;
