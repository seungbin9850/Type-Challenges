# GetReturnType

내장 제네릭 `ReturnType<T>`을 이를 사용하지 않고 구현하세요.

예시:

```ts
const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"
```
