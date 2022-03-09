class Ch06Person2_1{
  // 프로퍼티로 사용하기 위해서는
  name:string="OHTK";
  age:number;
  constructor(age:number){
    if (age===undefined){
      this.age=20;
    } else{
      this.age=age;
    }
  }
  async init(){

  }
}

const ch06_p2_1:Ch06Person2_1= new Ch06Person2_1(30);
// const ch06_p2_2:Ch06Person2_1= new Ch06Person2_1();
console.log(ch06_p2_1)  // Ch06Person2_1 { name: 'OHTK', age: 30 }
console.log(ch06_p2_1.age); // 30
