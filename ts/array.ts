// 배열 표기 두 가지 방법

// 1. union 표기 방법
let list1:(number | string)[] = [1,2,3,"4"];
console.log(list1)  // [ 1, 2, 3, '4' ]

let list2:Array<number> = [1,2,3];
console.log(list2) // [ 1, 2, 3 ]
 
