# 05. interface extends interface

### 5.1. interface의 추가

```ts
// IPERSON2 interface
interface IPerson2{
  name:string;
  age?:number;
}

// IKorean extends
interface IKorean extends IPerson2{
  city:string;
}

```
- `IKorean` 은 `interface` 를 `IPerson2` 를 `extends` 하여 상속한다.

<br/>

```ts
const k:IKorean = {
  name:"오태권",
  city:"인천",
  age:30,
}

console.log(k) 
// { name: '오태권', city: '인천', age: 30 }
```

- `k` 변수를 통해 `name` 과 `city`, `age`를 모두 할 수 있게 된다.

<br/>

```ts
// DOM
HTMLDListElement
```

_대규모 프로젝트를 할 경우에는 상속관계를 하는 것이 좋다._