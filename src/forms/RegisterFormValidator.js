import Validator from './Validator';

export default function RegisterFormValidator(values) {
  const { errors } = Validator(
    values,
    {
      name: 'required',
      email: 'required|email',
      password: 'required',
      year: 'required',
      month: 'required',
      day: 'required',
    },
    {
      aliases: {
        email: 'email address',
      },
    },
  );

  return errors;
}
