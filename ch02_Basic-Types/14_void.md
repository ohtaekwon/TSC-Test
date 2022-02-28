# 14. void


### 14.1. void의 특징

- 값을 반환하지 일종의 `undefined`를 리턴하는 상태이다.
- 따라서, `return`타입으로 사용한다.

```ts
function returnVoid(message:string):void{
  console.log(message);
  
  return undefined; // undefined만 유일하게 void에 할당이 가능하다. 
}
// r의 타입은 void
const r = returnVoid('리턴이 없다.'); 
console.log(r) // undefined
```
