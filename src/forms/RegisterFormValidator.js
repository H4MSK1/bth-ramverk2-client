import Validator from './Validator';

export default function RegisterFormValidator(values) {
  const { errors } = Validator(
    values,
    {
      name: 'required',
      email: 'required|email',
      password: 'required',
      password_confirm: 'required|same:password',
      year: 'required',
      month: 'required',
      day: 'required',
    },
    {
      aliases: {
        email: 'email address',
        password_confirm: 'confirm password',
      },
    },
  );

  return errors;
}
