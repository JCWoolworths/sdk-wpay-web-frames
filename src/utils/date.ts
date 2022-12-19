export const validateMMYY = (date: string): boolean => {
  return !!date.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);
};
