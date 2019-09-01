import Validator from './Validator';

export default function RegisterFormValidator(values) {
  const { errors } = Validator(
    values,
    {
      name: 'required',
      email: 'required|email',
      password: 'required',
      birthDate: 'required',
    },
    {
      aliases: {
        email: 'email address',
        birthDate: 'date of birth',
      },
    },
  );

  return errors;
}
