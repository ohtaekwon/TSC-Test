// returnAny라는 함수는 message라는 인수를 받으며,
// return타입은 any이다.
function returnAny(message: any):any{
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString();


let looselyTyped:any = {};
const d = looselyTyped.a.b.c.d; 
// any를 통해 안정성을 잃게 되는 경우가 발생한다.

function leakingAny(obj:any){
  const a:number = obj.num;
  const b = a+1;
  return b;  
}

const c = leakingAny({num:0});
// const e:string = c.indexOf("0");