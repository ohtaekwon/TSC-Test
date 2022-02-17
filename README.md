// TypeScript Type vs JavaScript Type
// 1. TypeScript : Static Types 
// 2. JavaScript : Dynamic Typse

## Primitive Type
---

- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형이다.
- 프리미티브 혀응 ㅣ내장 함수를 사용하는 것은 자바스크립트 처리 방식 덕분
- (ES2015 기준)6가지
  - boolean
  - number
  - string
  - symbol(ES2015)
  - null
  - undefined

##### ex )
```ts
  let name = 'mark';
  name.toString();
```

- literal 값으로 Primitive 타입으 ㅣ서브 타입을 나타낼 수 있다.

```ts
true;
'hello';
3.14;
null;
undefined
```

- 또는 래퍼 객체로 만들 수 있다.

```ts
new Boolean(false); // typeof new Boolean(fasle) : 'object'
new String('world'); // typeof new String('world') : 'object'
new Number(42); // typeof new Number(42) : 'object'
```
<br>

## Number/number
---

- JavaScript와 같이, TypeScript의 모든 숫자는 부동 소수점 값 이다.
- TypeScript는 16진수 및 10진수 리터럴 외에도, ECMAScript 2015에 도입된 2진수 및 8진수를 지원한다.
- NaN
- 1_000_000과 같은 표기가 가능하다

```ts
let decimal:number = 6; // 10진수 리터럴

let hex:number = 0xf00d; // 16진수 리터럴

let binary:number = 0b1010; // 2진수 리터럴

let octal:number = 0o744; // 8진수 리터럴

let notANumber:number = NaN;

let underscoreNum:number = 1_000_000;

```

<br>

## Template String
---

- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- 이 문자열은 backtick(=backquote) 기호에 둘러쌓여 있다.
- 포함된 표현식은 `${expr}`와 같은 형태로 사용한다.

```ts
let myName:string = 'otk';

myName = 'mark';


let fullName:string = `Bob bobbington`;
let age:number = 38;
let sentence1:string = `Hello, my name is ${fullName}.
I'll be ${age+1} years old next month.`;

// template string을 사용하지 않을 경우
let sentence2:string = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age+1) + "years old next month.";
```

<br>


## Symbol
---

- ECMAScript 2015의 Symbol이다.
- new Symbol로 `사용할 수 없다.`
- Symbol을 함수로 사용해서 `symbol`타입을 만들어낼 수 있다.

```ts
console.log(Symbol('foo')===Symbol('foo')) // false
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

<br>


## null & undefined
---

- In TypeScript, both undefined and null actually have their named undefined and null respectively.
TypeScript에서, undefined와 null은 실제로 각각 undefined 및 null 이라는 타입을 가진다.
- Much like void, they're not extremely useful on their own:void와 마찬가지로, 그 자체로는 그다지 유용하지 않다.
- 둘 다 소문자만 존재한다.

```ts
// 이 변수들에 할당할 수 있는 것들은 거의 없다.

let u:undefined = undefined;
let n:null=null;
```

<br>


## undefined & null are subtypes of all other types.
---

- 설정을 하지 않으면 그렇습니다.
- number에 null 또는 undefined를 할당할 수 있다는 의미이다.
- 하지만, 컴파일 옵션에서 `--strictNullChecks` 사용하면, null과 undefined는 void나 자기 자신들에게만 할당할 수 있다.
  - 이 경우, null과 undefined를 할당할 수 있게 하려면, union type을 이용해야 한다.