import currency from "currency.js";

export const formatToTwoPointCurrency = (value: number): string => {
  return currency(value).format();
};
