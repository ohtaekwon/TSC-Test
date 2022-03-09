class Ch06Person2{
  // 프로퍼티로 사용하기 위해서는
  name:string="OHTK";
  
  // 어딘가에서 직접 값을 할당하겠다 할 떄는, !를 쓰고
  // 에러가 발생하지 않게 된다.
  age!:number;
}

const ch06_p2 = new Ch06Person2();

console.log(ch06_p2); // ch06Person {}
ch06_p2.age=30;
console.log(ch06_p2.age); // 30