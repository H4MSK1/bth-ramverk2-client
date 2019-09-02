export const generateRange = (start, stop, step = -1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export const getDaysInMonth = (month, year) =>
  new Date(parseInt(year), parseInt(month), 0).getDate();

export const getDaysInMonthAsArray = (month, year) => {
  const days = getDaysInMonth(month, year);
  return generateRange(1, days, 1);
};
