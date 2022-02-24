// strictNullChecks => true

/* error가 발생한다. */
// let MyName:string = null;
// let u : undefined = null;

let v:void=undefined;

let union:string | null=null;
// | 이거는 string뿐만 아니라 null도 같이 가지고 있다는 의미이다. 

union="Mark";