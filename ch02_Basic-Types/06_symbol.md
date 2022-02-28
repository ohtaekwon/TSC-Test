# 06. symbol

<br>

### 6.1. Symbol
- ECMAScript 2015의 Symbol이다.
- `new Symbol` 로 **사용할 수 없다.**
- Symbol을 함수로 사용해서 **symbol** 타입을 만들어낼 수 있다.

```ts
// "lib": ["ES2015","DOM"] 으로 설정해야 error가 안 난다.
console.log(Symbol('foo')===Symbol('foo')) 
// false
```
처음에는 error가 나기떄문에, `tsconfig.json` 파일에 접근하여, `"lib"`에 ` ["ES2015","DOM"]`으로 설정해야한다.

- 프리미티브 타입의 값을 담아서 사용한다.
- 고유하고 수정불가능한 값으로 만들어 준다.
- 그래서 주로 접근을 제어하는데 쓰는 경우가 많다.

<br/>

### 6.2. Symbol의 사용

##### 문자열 처럼, 심벌은 객체 프로퍼티의 키로써 사용될 수 있다.

```ts
let sym = Symbol();

let obj = {
  // sym:"value"
  // 단순하게 sym으로 하게 되면 접근이 불가능하다.
  [sym]:"value"
};
consolo.log(obj[sym]); // "value"
```
- 함수를 사용할 때는 대문자 Symbol,
- 타입으로 사용할 때는 소문자 symbol

<br>
