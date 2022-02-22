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
