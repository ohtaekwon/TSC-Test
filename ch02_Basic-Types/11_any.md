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
