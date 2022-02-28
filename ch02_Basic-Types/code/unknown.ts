// 값이 있는 것이 아닌, unkown
declare const  maybe:unknown;

// const aNumber: number = maybe; // 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)

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