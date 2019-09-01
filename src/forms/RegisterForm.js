import React from 'react';
import { Col, Row, Button, Form } from 'reactstrap';
import FormInput from '../components/FormInput';
import useForm from '../hooks/useForm';
import RegisterFormValidator from './RegisterFormValidator';

const initialState = {
  name: '',
  email: '',
  password: '',
  birthDate: '',
};

const RegisterForm = ({ onSubmit }) => {
  const [values, setValues, errors, handleChange, handleSubmit] = useForm(
    initialState,
    () => {
      onSubmit(values);
      setValues(initialState);
    },
    RegisterFormValidator,
  );

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormInput
              type="text"
              name="name"
              label="Name"
              value={values.name}
              error={errors.name}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <FormInput
              type="email"
              name="email"
              label="Email"
              value={values.email}
              error={errors.email}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row form>
          <Col md={6}>
            <FormInput
              type="password"
              name="password"
              label="Password"
              value={values.password}
              error={errors.password}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <FormInput
              type="date"
              name="birthDate"
              label="Date of birth"
              value={values.birthDate}
              error={errors.birthDate}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row form>
          <Col sm={12} md={{ size: 4, offset: 4 }}>
            <Button color="primary" type="submit" block>
              Register
            </Button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default RegisterForm;
