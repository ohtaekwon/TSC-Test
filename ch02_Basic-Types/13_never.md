# 13. never

<br>

## 13.1. never 특징
```ts
function error(message:string):never{ 
  // never 리턴은 아무것도 리턴하지 않는다는 뜻이다.
  // 따라서, 끝나지 않기 위해서 throw를 하면서 함수 종료
  throw new Error(message);
}

function fail(){
  return error('failed');
}

function infiniteLoop():never{
  while(true){}
}
```

- never 타입은 모든 타입의 `subtype` 이며, **모든 타입에 할당 할 수 있다.**
- 하지만, never에는 그 어떤 것도 할당할 수 없다.
- any 조차도 never 에게 할당 할 수 없다.
- **잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.**

```ts
// 변수 타입이 string
let a : string = 'hello';

if (typeof a !== 'string'){
  // 변수가 string인데, string타입이 아닌 경우를 조건으로 했다.
  a; // 따라서, 아무것도 할당할 수 없는 상태인 never가 할당된다. 
}
```

- 위의 결과에서는 a는 아무것도 출력할 수 없는 상태로 never가 나온다.

```ts
declare const a : string | number;

if (typeof a !== 'string'){
  a; // string을 제외한 number 타입이 나온다. 
}
```
- 위의 결과에서 a string과 number의 union형태이기 때문에 `(string + number) - string` 인 상태이기 때문에 `number` 의 형태로 선언이 된다.


## 13.2. 조건부 타입

- 잘못된 타입을 넣는 것을 방지하는데 사용된다. 

```ts
type Indexable<T> = T extends string ? T & {[index:string]:any} : never;
type ObjectIndexable = Indexable<{}>;
const b : Indexable<{}> = '';
```