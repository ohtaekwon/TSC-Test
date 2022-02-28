// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1:1 = 1;
let sup1:number = sub1; // number가 1 보다 더 큰 타입이다.
// 따라서, sup1이에는 sub1을 넣을 수 있다.
// sub1= sup1; // error Type 'number' is not assignable to type '1'.

// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2:number[]=[1]; // number로 된 Array 타입
let sup2:object = sub2; // Array도 Object 중 하나이기 때문에 sup2에 sub2를 할당할 수 있다.
// 반대는 성립하지 않음
// sub2=sup2; // error Type '{}' is missing the following properies from type 'number[]': lenght, pop, push, concat, and 16 more.

// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3:[number,number]=[1,2]; // 튜플 타입
let sup3:number[]=sub3;
// sub3 = sup3; // error! Type 'number[]' is not assignable to type '[number,number]'. Target requres 2 element(s) but source may have fewer.