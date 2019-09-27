import ValidatorRules from './ValidatorRules';

describe('forms/report/ValidatorRules', () => {
  const formValues = {
    week: 2,
    body: 'this is a mocked value',
  };

  it('returns zero errors when provided values', () => {
    const feedback = ValidatorRules(formValues);

    expect(feedback).toEqual({});
  });

  it('returns two error messages when not provided any values', () => {
    const feedback = ValidatorRules({});

    expect(Object.keys(feedback).length).toBe(2);
    expect(feedback).toHaveProperty('week');
    expect(feedback).toHaveProperty('body');
  });

  it('returns one error message for invalid datatype for field week', () => {
    const feedback = ValidatorRules({ ...formValues, week: 'two' });

    expect(Object.keys(feedback).length).toBe(1);
    expect(feedback).toHaveProperty('week');
  });
});
