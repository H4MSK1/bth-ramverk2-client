import React from 'react';
import { Col, Row, Button, Form, Label } from 'reactstrap';
import { generateRange, getDaysInMonthAsArray } from '../utils';
import FormInput from '../components/FormInput';
import useForm from '../hooks/useForm';
import RegisterFormValidator from './RegisterFormValidator';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const getYears = () => {
  return generateRange(currentYear, currentYear - 100);
};

const getMonths = () => ({
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
});

const initialState = {
  name: '',
  email: '',
  password: '',
  year: currentYear,
  month: 1,
  day: 1,
  days: getDaysInMonthAsArray(1, currentYear),
};

const RegisterForm = ({ onSubmit }) => {
  const { values, setValues, errors, handleChange, handleSubmit } = useForm(
    initialState,
    () => {
      onSubmit(values);
      setValues(initialState);
    },
    RegisterFormValidator,
  );

  React.useEffect(() => {
    const daysInMonth = getDaysInMonthAsArray(values.month, values.year);
    const newValues = {
      days: daysInMonth,
      day: parseInt(values.day) > daysInMonth ? daysInMonth : values.day,
    };

    setValues(state => ({ ...state, ...newValues }));
  }, [values.year, values.month, values.day]);

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
