function returnVoid(message:string):void{
  console.log(message);
  
  return undefined; // undefined만 유일하게 void에 할당이 가능하다. 
}
// r의 타입은 void
const r = returnVoid('리턴이 없다.'); // const r: void
console.log(r) // undefined
