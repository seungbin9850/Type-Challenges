# Parameters

내장 제네릭 `Parameters<T>`를 이를 사용하지 않고 구현하세요.

```ts
const parameterTest = (a: string, b: number) => {};

type Result = MyParameters<typeof parameterTest>; // expected [a: string, b: number]
```
