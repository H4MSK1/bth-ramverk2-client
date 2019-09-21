import Validator from '../Validator';

export default function ValidatorRules(values) {
  const { errors } = Validator(values, {
    week: 'required|numeric',
    body: 'required',
  });

  return errors;
}
