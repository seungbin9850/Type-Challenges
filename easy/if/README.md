# If

조건 `C`, 참일 때 반환하는 타입 `T`, 거짓일 때 반환하는 타입 `F`를 받는 타입 `If`를 구현하세요. `C`는 `true` 또는 `false`이고, `T`와 `F`는 아무 타입입니다.

예시:

```ts
type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
```
