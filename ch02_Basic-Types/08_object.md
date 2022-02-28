# 08. object

### 8.1. object vs Object

```ts
// 1. create by object literal
const person1 = {name:'Mark', age:39};
// person1 is not "object" type.
// person1 is "{name:string, age:number}" type.

// 2. create by Object.create
// Object는 소문자가 아닌, 대문자이기 때문에,
// Object는 내장 전역객체이다. 
const person2 = Object.create({name:'Mark',age:39}); // const person2: any


// 3. 안되는 유형들
// const person3 = Object.create(39);
```

### 8.2. object type

- a type that represents the **non-primitive type**
- **"primitive type이 아닌 것"** 을 나타내고 싶을 때 사용하는 타입

### 8.3. non-primitive type

- **not** number, string, boolean, bigint, symbol, null, or undefined 이 아닌 경우에, object를 쓴다.


### 8.4 object 타입의 사용예시

```ts
let obj : object = {}; // 가능은 하지만, 이런식으로 사용은 하지 않는다. 
obj = {name:'mark'};
obj = [{name:'Mark'}]; // array

// 이런식은 넣을 수 없다.
obj = 39; // Error
obj = 'Mark'; // Error
obj = true; // Error
obj = 100n; // Error
obj = Symbol(); // Error
obj = null; // Error
obj = undefined; // Error
```

```ts
// primitive 형을 받지 않겠다는 제약사항이다.
declare function create(o:object|null):void;
```
