import React from 'react';
import { FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

const FormInput = ({
  children,
  name,
  label,
  type,
  error,
  helpText,
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
    >
      {children}
    </Input>

    {helpText && <FormText color="muted">{helpText}</FormText>}

    {error && <FormFeedback>{error || 'This field is invalid.'}</FormFeedback>}
  </FormGroup>
);

export default FormInput;
