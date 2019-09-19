import React from 'react';
import { Col, Row, Button, Form, Label } from 'reactstrap';
import FormInput from 'components/FormInput';
import useForm from 'hooks/useForm';
import ValidatorRules from './ValidatorRules';
import {
  getDaysInMonthAsArray,
  getYears,
  getMonths,
  getCurrentYear,
} from 'utils';
import emilWut from 'static/emilWut.png';

const initialState = {
  name: '',
  email: '',
  password: '',
  password_confirm: '',
  year: getCurrentYear(),
  month: 1,
  day: 1,
  days: getDaysInMonthAsArray(1, getCurrentYear()),
};

const FormComponent = ({ onSubmit }) => {
  const { values, setValues, errors, handleChange, handleSubmit } = useForm(
    initialState,
    () => {
      onSubmit(values);
    },
    ValidatorRules,
  );

  React.useEffect(() => {
    const daysInMonth = getDaysInMonthAsArray(values.month, values.year);
    const newValues = {
      days: daysInMonth,
      day: parseInt(values.day) > daysInMonth ? daysInMonth : values.day,
    };

    setValues(state => ({ ...state, ...newValues }));
  }, [values.year, values.month, values.day]);

  const renderCustomLabel = (label, hasError) => (
    <>
      {label}
      {hasError && (
        <img
          alt=""
          src={emilWut}
          style={{ position: 'absolute', top: 32, right: 6, height: 38 }}
        />
      )}
    </>
  );

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormInput
              type="text"
              name="name"
              label={renderCustomLabel('Name', errors.name)}
              value={values.name}
              error={errors.name}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <FormInput
              type="email"
              name="email"
              label={renderCustomLabel('Email', errors.email)}
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
              label={renderCustomLabel('Password', errors.password)}
              value={values.password}
              error={errors.password}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <FormInput
              type="password"
              name="password_confirm"
              label={renderCustomLabel(
                'Confirm password',
                errors.password_confirm,
              )}
              value={values.password_confirm}
              error={errors.password_confirm}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row form>
          <Col md={6}>
            <Label>Date of birth</Label>
            <Row form>
              <Col md={4}>
                <FormInput
                  type="select"
                  name="year"
                  value={values.year}
                  error={errors.year}
                  onChange={handleChange}
                >
                  {getYears().map(year => (
                    <option value={year} key={year}>
                      {year}
                    </option>
                  ))}
                </FormInput>
              </Col>
              <Col md={4}>
                <FormInput
                  type="select"
                  name="month"
                  value={values.month}
                  error={errors.month}
                  onChange={handleChange}
                >
                  {Object.entries(getMonths()).map(([month, monthName]) => (
                    <option value={month} key={month}>
                      {monthName}
                    </option>
                  ))}
                </FormInput>
              </Col>
              <Col md={4}>
                <FormInput
                  type="select"
                  name="day"
                  value={values.day}
                  error={errors.day}
                  onChange={handleChange}
                >
                  {values.days.map(day => (
                    <option value={day} key={day}>
                      {day}
                    </option>
                  ))}
                </FormInput>
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <Label>&nbsp;</Label>
            <Button color="primary" type="submit" block>
              Register
            </Button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default FormComponent;
