# 01. Interfaces


### 1.1. What are Interfaces ?

```ts
function hello1(person:{name:string, age:number}):void{
  console.log(`안녕하세요 ${person.name}입니다.`);
}
const p1:{name:string, age:number}={
  name:'Mark',
  age:39
};

hello(p1);
```

- `{name:string, age:number}` 을 반복하여 사용하는 것은 비효율적이다.
- 따라서, `Person`이라는 데이터 구조를 통해서 만드는 것이 낫다.
- 그러기 위해서는 `interface`를 사용한다.

### 1.2. interface 사용

```ts
// ts
// interface
interface Person1{
  name:string; 
  age:number;
}

function hello1(person:Person1):void{
  console.log(`안녕하세요 ${person.name}입니다.`);
}

const p1:Person1={
  name:"mark",
  age:39,
};

hello1(p1);

```

#### 1.2.1. compile 된 js

```js
// js
"use strict";
function hello1(person) {
    console.log(`안녕하세요 ${person.name}입니다.`);
}
// const p1:{name:string, age:number}={
const p1 = {
    name: "mark",
    age: 39,
};
hello1(p1);

```
- `interface`는 compile 되었을 때, 사라지게 된다.