class Ch06Person{
  // 프로퍼티로 사용하기 위해서는
  name;

  constructor(name:string){
    this.name=name;
  }
}

const ch06_p1 = new Ch06Person('Mark');

console.log(ch06_p1); // ch06Person {}