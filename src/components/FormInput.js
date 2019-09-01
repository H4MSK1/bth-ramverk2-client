import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const FormInput = ({
  name,
  label,
  type,
  error,
  onChange = () => {},
  ...props
}) => (
  <FormGroup>
    {label && <Label for={`input_${name}`}>{label}</Label>}

    <Input
      id={`input_${name}`}
      type={type}
      name={name}
      onChange={onChange}
      invalid={Boolean(error)}
      {...props}
    />

    {error && <FormFeedback>{error || 'This field is invalid.'}</FormFeedback>}
  </FormGroup>
);

export default FormInput;
