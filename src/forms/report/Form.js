import React from 'react';
import { Col, Row, Button, Form, Label } from 'reactstrap';
import FormInput from 'components/FormInput';
import useForm from 'hooks/useForm';
import ValidatorRules from './ValidatorRules';

const weeks = [1, 2, 3, 4, 5, 6];

const initialState = {
  body: '',
  week: weeks[0],
};

const FormComponent = ({ onSubmit, preFilledValues = {} }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    initialState,
    () => {
      onSubmit(values);
    },
    ValidatorRules,
    preFilledValues,
  );
  const isWeekSelectionDisabled = Object.keys(preFilledValues).length > 0;

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col xs={12}>
            <FormInput
              type="textarea"
              name="body"
              label="Body"
              value={values.body}
              error={errors.body}
              onChange={handleChange}
              rows={6}
              helpText="The contents of your report"
            />
          </Col>
        </Row>

        <Row form>
          <Col md={6}>
            <FormInput
              type="select"
              name="week"
              label="Kmom"
              value={values.week}
              error={errors.week}
              onChange={handleChange}
              disabled={isWeekSelectionDisabled}
              helpText="Which kmom does this report apply to?"
            >
              {weeks.map((week, index) => (
                <option key={index} value={week}>
                  Kmom{String(week).padStart(2, 0)}
                </option>
              ))}
            </FormInput>
          </Col>
          <Col md={6}>
            <Label>&nbsp;</Label>
            <Button color="primary" type="submit" block>
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default FormComponent;
