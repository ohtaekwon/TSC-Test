# 01. TypeScript Type vs JavaScript Type

<br>

1. TypeScript : Static Types.
    - set during development
2. JavaScript : Dynamic Typse.
    - resolved at runtime

<br>

- 프로그램이 유용하려면, 가장 간단한 데이터 단위로 작업 할 수 있어야 한다.
 - numbers, strings, structures, boolean 값 등등
- TypeScript 에서는 Javascript 에서 기대하는 것과 동일한 타입을 지원하며, 돕기 위해 추가적인 열거 타입이 제공된다.
- TypeScript 에서 프로그램 작성을 위해 기본 제공하는 데이터 타입
- **사용자가 만든 타입은 결국은 이 기본 자료형들로 쪼개진다.**
- Javascript 기본 자료형을 포함(superset)
    - **ECMAScript 표준에 따른 기본 자료형은 6가지**
      - Boolean
      - Number
      - String
      - Null
      - Undefined
      - Symbol(ECMAScript6 에 추가)
      - ***Array : object 형 (기본 자료형과 다른 object형)***
    - **프로그래밍을 도울 몇가지 타입이 더 제공된다.**
      - Any, Void, Never, Unkwon
      - Enum
      - Tuple: object 형   

<br>

# 02. Primitive Type

<br>

## Primitive Type

- 오브젝트와 레퍼런스 형태가 아닌 **실제 값을 저장하는 자료형이다.**
- 프리미티브 형의 내장 함수를 사용하는 것은 자바스크립트 처리 방식 덕분
- (ES2015 기준)6가지
  - boolean
  - number
  - string
  - symbol(ES2015)
  - null
  - undefined

```ts
  let name = 'mark';
  name.toString();
```

- literal 값으로 Primitive 타입의서브 타입을 나타낼 수 있다.

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

# 03. boolean

<br>

```ts

let isDone:boolean = false;

isDone = true;

console.log(typeof isDone) // 'boolean'

let isOk:Boolean = true

let isNotOk : boolean = new Boolean(true); // 이런시그이 코드는 사용하지 않음

```

<br>

# 04. number

<br>

## Number / number

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

# 05. string

<br>

## string
- 다른 언어와 마찬가지로 텍스트 형식을 참조하기 위해 `'string'` 형식을 사용한다.
- Javascript와 마찬가지로, TypeScript는 문자열 데이터를 둘러싸기 위해 큰 따옴표 (")나, 작은 따옴표(')를 사용한다.

```ts
let name:string = "mark";
name='anna';
```

## Template String

- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- 이 문자열은 backtick(=backquote) 기호에 둘러쌓여 있다.
- 포함된 표현식은 `'${expr}'`와 같은 형태로 사용한다.

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

# 07. Null & undefined

<br>

## Undefined & Null 

- In TypeScript, both undefined and null actually have their named undefined and null respectively.
**TypeScript** 에서, **undefined** 와 **null은 실제로 각각 undefined 및 null 이라는 타입을 가진다.** 
- Much like void, they're not extremely useful on their own:void와 마찬가지로, 그 자체로는 그다지 유용하지 않다.
- **둘 다 소문자만 존재한다.**

```ts
// 이 변수들에 할당할 수 있는 것들은 거의 없다.

let u:undefined = undefined;
let n:null=null;
```

## undefined & null are subtypes of all other types.
- 설정을 하지 않으면 그렇습니다.
- number에 null 또는 undefined를 할당할 수 있다는 의미이다.
- 하지만, 컴파일 옵션에서 **'--strictNullChecks'** 사용하면, null과 undefined는 void나 자기 자신들에게만 할당할 수 있다.
  - 이 경우, null과 undefined를 할당할 수 있게 하려면, `union type` 을 이용해야 한다.

```ts
let name:string=null;
let age:number=undefined;

// strictNullChecks => true
// Type 'null' is not assignable to type 'string'/

let name:string = null; // (x)

// null => null || void, undefined => undefined || void
// Type 'null' is not assignable to type 'undefined'

let u : undefined = null; // (x)

let v : void = undefined; // (o)

let union:string | null | undefined = 'str';
```

## null in JavaScript
- null 이라는 값으로 할당된 것을 null이라고 한다.
- 무언가가 있는데, 사용할 준비가 덜 된 상태.
- null이라는 타입은 null이라는 값만 가질 수 있다.
- **런타임에서 typeof 연산자를 이용해서 알아내면, object이다.**

```ts
let n:null=null;
console.log(n); // null
console.log(typeof n); // obeject
```

## undefined in JavaScript

- 값을 할당하지 않은 변수는 undefined 라는 값을 가진다.
- 무언가가 아예 준비가 안된 상태
  - 변수를 선언만 하고 값을 할당하지 않은 상태.
- object의 property가 없을 때도 undefined이다.
- **런타임에서 typeof 연산자를 이용해서 알아내면, undefined이다.**

```ts
let u : undefined = undefined;

console.log(u); // undefined
console.log(typeof u); // undefined
```

<br>

# 08. object

<br>

```ts
// create by object literal
const person1 = {name:'Mark', age:39};
// person1 is not "object" type.
// person1 is "{name:string, age:number}" type.

// create by Object.create
// Object는 내장 전역객체이다. 
const person2 = Object.create({name:'Mark',age:39});
```

## object

- a type that represents the **non-primitive type**
- **"primitive type 이 아닌 것"** 을 나타내고 싶을 때 사용하는 타입

## non-primitive type

- **not** number, string, boolean, bigint, symbol, null, or undefined


<br>

# 09. Array

<br>

## Array

- 원래 자바스크립트에서 **array** 는 객체이다.
- 사용방법
  - **Array<타입>**
  - 타입[]
```ts
// 배열을 표기하는 두 가지 방법.
// 1. union 타입으로 표기 방법.
let list:(number|string)[] = [1,2,3,"4"];
// 2. 
let list:Array<number> = [1,2,3];
```

<br>

# 10. Tuple

<br>

```ts
let x : [string, number];
// 항상 순서와, 타입과 길이가 맞아야한다.
x = ["hello",39];

// 2. 순서와 타입이 일치해야한다.
// x = [10,"world"] /* 두 개 다 문제가 있다고 나온다. */

// 3. 길이가 일치해야한다.
// x[3] = "world"
// x[2] = "world";

const person:[string, number]=["Mark",39]

// 디스트럭쳐링
const [first, second, /*third*/] = person;
```

<br>

# 11. any

<br>

## any

- 어떤 타입이어도 상관없는 타입이다.
- 이걸 최대한 쓰지 않는게 핵심이다.
- 왜냐하면 컴파일 타임에 타입 체크가 정상저으로 이뤄지지 않기 때문이다.
- 그래서 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있다.
  - nolmplicitAny

```ts
// returnAny라는 함수는 message라는 인수를 받으며,
// return타입은 any이다.
function returnAny(message: any):any{
  console.log(message);
}
const any1 = returnAny('리턴은 아무거나');
any1.toString();
``` 

- **any는 계속해서 개체를 통해 전파된다.**
- **결국, 모든 편의는 타입 안정성을 잃는 대가로 온다**
- **타입 안전성은 TypeScrpt를 사용하는 주요 동기 중 하나이며 필요하지 않은 경우에는 any를 사용하지 않도록 해야한다.**

```ts
let looselyTyped:any={};
let d =looselyTyped.a.b.c.d;
// any를 통해 안정성을 잃게 되는 경우가 발생한다.

// 누수가 발생하는 경우
function leakingAny(obj:any){
  const a:number = obj.num;
  const b = a+1;
  return b;  
}

const c = leakingAny({num:0});
// 누수가 발생한다.
const e:string = c.indexOf("0");
```

<br>

# 12. unknown

<br>

- **응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수 도 있다.**
- **이러한 값은 동적 컨텐츠(예: 사용자로부터, 또는 우리 API의 모든 값을 의도적으로 수락하기를 원할 수 있다.)**
- **이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown 타입을 제공한다.**

- Typescript 3.0 버전부터 지원
- any와 짝으로 any 보다 **Type-safe** 한 타입
  - any와 같이 아무거나 할당할 수 있다.
  - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
  - 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
- unknown 타입을 사용하면 **runtime error** 를 줄일 수 있을 것이다.
  - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것이다.

<br>

# 13. never

<br>

- never 타입은 모든 타입의 subtype이며, 모든 타입에 할당 할 수 있다.
- 하지만, never에는 그 어떤 것도 할당할 수 없다.
- any 조차도 never 에게 할당 할 수 없다.
- 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.


```ts
let a : string = 'hello';

if (typeof a !== 'string'){
  // 아무것도 할당할 수 없는 상태 : never
  a;

}
```

- 위의 결과에서는 a는 아무것도 출력할 수 없는 상태로 never가 나온다.

```ts
declare const a : string | number;

if (typeof a !== 'string'){
  a;
}
```
- 위의 결과에서 a string과 number의 union형태이기 때문에 `(string + number) - string` 인 상태이기 때문에 `number` 의 형태로 선언이 된다.


<br>

# 14. void

<br>

```ts
function returnVoid(message:string):void{
  console.log(message);
  
  return undefined;
}
// r의 타입은 void
const r = returnVoid('리턴이 없다.'); 

```
