# 05. string

### 5.1. string
- 다른 언어와 마찬가지로 텍스트 형식을 참조하기 위해 `'string'` 형식을 사용한다.
- Javascript와 마찬가지로, TypeScript는 문자열 데이터를 둘러싸기 위해 큰 따옴표 (")나, 작은 따옴표(')를 사용한다.

```ts
let name:string = "mark";
name='anna';
```

### 5.2. Template String

- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- 이 문자열은 `backtick(=backquote)` 기호에 둘러쌓여 있다.
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

