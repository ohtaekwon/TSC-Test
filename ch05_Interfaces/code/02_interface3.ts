interface Person3{
  name:string;
  age?:number;
  // indexable type
  [index:string]:any;
}

function hello3(person:Person3):void{
  console.log(`안녕하세여! ${person.name} 입니다.`)
}

const p31:Person3 = {
  name:'TK',
  age:30,
};

const p32:Person3 ={
  name:'Mark',
  syster:['Sung','Chan']
}

const p33 : Person3 ={
  name:'duckgu',
  father:p31,
  mother:p32,
}
hello3(p33) // 안녕하세여! duckgu 입니다.