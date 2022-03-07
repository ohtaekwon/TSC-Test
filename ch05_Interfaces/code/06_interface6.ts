interface IPerson2{
  name:string;
  age?:number;
}

interface IKorean extends IPerson2{
  city:string;
}

const k:IKorean = {
  name:"오태권",
  city:"인천",
  age:30,
}

console.log(k)
// { name: '오태권', city: '인천', age: 30 }

// DOM
HTMLDListElement