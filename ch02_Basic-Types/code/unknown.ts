declare const  maybe:unknown;

// const aNumber: number = maybe;

if (maybe === true){
  const aBoolean: boolean = maybe;

  // maybe가 true이기 때문에 boolean형태는 string에 할당할 수 없다.
  // const aString:string = maybe;
}

if (typeof maybe==='string'){
  const aString:string = maybe;

  // const aBoolean:boolean = maybe;
}