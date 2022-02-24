"use strict";
// const aNumber: number = maybe;
if (maybe === true) {
    const aBoolean = maybe;
    // maybe가 true이기 때문에 boolean형태는 string에 할당할 수 없다.
    // const aString:string = maybe;
}
// string type일 떄,
if (typeof maybe === 'string') {
    maybe;
    const aString = maybe;
    // const aBoolean:boolean = maybe;
}
// number type일 떄, 
if (typeof maybe === 'number') {
    maybe;
    const aNumber = maybe;
}
