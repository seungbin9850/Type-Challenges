type MyParameters<T extends (...param: any) => any> = T extends (...param: infer P) => any ? P : never;

const parameterTest = (a: string, b: number) => {};

type Result = MyParameters<typeof parameterTest>;
