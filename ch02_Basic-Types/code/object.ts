// 1. create by object literal
const person1 = {name:"Mark", age:39};
// person1 is not "object" type.
// person1 is "{name:string, age:number}" type.

// 2. create by Object.create
const person2 = Object.create({name:'Mark',age:39});

// 3. 안되는 유형들
// const person3 = Object.create(39);

// let obj : object = {};
// obj = {name:'mark'};
// obj = [{name:'Mark'}];
// obj = 39; // Error
// obj = 'Mark'; // Error
// obj = true; // Error
// obj = 100n; // Error
// obj = Symbol(); // Error
// obj = null; // Error
// obj = undefined; // Error

declare function create(o:object|null):void;

create({prop:0});