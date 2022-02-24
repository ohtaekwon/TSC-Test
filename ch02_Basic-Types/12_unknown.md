# 12. unknown

<br>

- **응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수 도 있다.**
- **이러한 값은 동적 컨텐츠(예: 사용자로부터, 또는 우리 API의 모든 값을 의도적으로 수락하기를 원할 수 있다.)**
- **이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown 타입을 제공한다.**

```ts
// 값이 있는 것이 아닌, unkown
declare const  maybe:unknown;

// const aNumber: number = maybe;

if (maybe === true){
  const aBoolean: boolean = maybe;

  // maybe가 true이기 때문에 boolean형태는 string에 할당할 수 없다.
  // const aString:string = maybe;
}

// string type일 떄,
if (typeof maybe==='string'){
  maybe;
  const aString:string = maybe;

  // const aBoolean:boolean = maybe;
}

// number type일 떄, 
if (typeof maybe==='number'){
  maybe;
  const aNumber:number=maybe;
}

```
- Typescript 3.0 버전부터 지원
- any와 짝으로 any 보다 **Type-safe** 한 타입
  - any와 같이 아무거나 할당할 수 있다.
  - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
  - 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
- unknown 타입을 사용하면 **runtime error** 를 줄일 수 있을 것이다.
  - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것이다.

<br>
