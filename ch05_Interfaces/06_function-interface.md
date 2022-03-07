# 06. function interface

### 6.1. 함수에 대해서 interface

```ts
interface HelloPerson{
  (name:string, age?:number):void;
}

const helloPerson:HelloPerson = function(name:string,age?:number){
  console.log(`안녕하세요! ${name}입니다.`);
}
// age:number 을 하면 오류가 발생함.


helloPerson('오태권',30);
```