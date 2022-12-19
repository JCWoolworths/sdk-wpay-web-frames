export const getMissingRequiredParams = (requiredParams: any) => {
  return Object.entries<any>(requiredParams)
    .filter(([, value]) => !(value && value.length))
    .map(([key]) => key);
};
