function returnVoid(message:string):void{
  console.log(message);
  
  return undefined;
}
// r의 타입은 void
const r = returnVoid('리턴이 없다.'); 
