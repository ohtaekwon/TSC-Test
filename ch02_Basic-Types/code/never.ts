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

// let a : string = "hello"
declare const a : string | number;

if (typeof a !== 'string'){
  a;
}

type Indexable<T> = T extends string ? T & {[index:string]:any} : never;
type ObjectIndexable = Indexable<{}>;
// const b : Indexable<{}> = '';