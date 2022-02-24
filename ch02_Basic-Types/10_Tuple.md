# 10. Tuple

<br>

### 튜블의 특성
```ts
// 1. // 항상 순서와, 타입과 길이가 맞아야한다.
let x : [string, number];
x = ["hello",39];

// 2. 순서와 타입이 일치해야한다.
x = [10,"world"] /* 두 개 다 문제가 있다고 나온다*/

//3. 길이가 일치해야한다.
x[3] = "world";
x[2] = "world";
```
- 튜블 타입은 항상 순서와, 타입과 길이가 맞아야한다. 

### 딕스트럭쳐링

```ts
const person:[string, number]=["Mark",39]

// 디스트럭쳐링
// const [first, second, third] = person; //error

const [first, second, /*third*/] = person;

console.log(first); // Mark
console.log(second); // 39

```
<br>
