# 06. symbol

<br>

## Symbol
- ECMAScript 2015의 Symbol이다.
- `new Symbol` 로 **사용할 수 없다.**
- Symbol을 함수로 사용해서 **symbol** 타입을 만들어낼 수 있다.

```ts
console.log(Symbol('foo')===Symbol('foo')) 
// false
```

- 프리미티브 타입의 값을 담아서 사용한다.
- 고유하고 수정불가능한 값으로 만들어 준다.
- 그래서 주로 접근을 제어하는데 쓰는 경우가 많다.

```ts
let sym = Symbol();

let obj = {
  [sym]:"value"
};
consolo.log(obj[sym]); // "value"

```
- 함수를 사용할 때는 대문자 Symbol,
- 타입으로 사용할 때는 소문자 symbol


<br>
