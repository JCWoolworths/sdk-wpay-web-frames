export const insertSpaces = (value: string, everyCharCount: number): string => {
  const str = value.match(new RegExp(`.{1,${everyCharCount}}`, "g"));

  return str ? str.join(" ") : value;
};
