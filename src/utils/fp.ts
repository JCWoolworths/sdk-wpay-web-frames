type ArityOneFn = (arg: any) => any;

export const compose =
  (...functions: ArityOneFn[]) =>
  (x: any) =>
    functions.reduceRight((acc: any, fn: any) => fn(acc), x);
