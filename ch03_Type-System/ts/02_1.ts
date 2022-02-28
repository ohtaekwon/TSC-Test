// Structural Type System
// interface
interface IPerson {
  name:string;
  age:number;
  speak():string;
}
// typeAlias
type PersonType={
  name:string;
  age:number;
  speak():string;
};

let personInterface : IPerson = {} as any;
let personType : PersonType= {} as any;

// 위는 같은 구조이기 때문에 서로 대입할 수 있다.

personInterface = personType;
personType = personInterface;