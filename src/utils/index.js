export const generateRange = (start, stop, step = -1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export const getDaysInMonth = (month, year) =>
  new Date(parseInt(year), parseInt(month), 0).getDate();

export const getDaysInMonthAsArray = (month, year) => {
  const days = getDaysInMonth(month, year);
  return generateRange(1, days, 1);
};

export const getCurrentYear = () => new Date().getFullYear();

export const getYears = (limit = 100) => {
  const currentYear = getCurrentYear();
  return generateRange(currentYear, currentYear - limit);
};

export const getMonths = () => ({
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
