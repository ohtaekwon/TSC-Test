let myName:string = "otk";

myName = 'mark';

let fullName:string = `Bob bobbington`;
let age:number = 31;
let sentence1:string = `setence1 : Hello, my name is ${fullName}.

I'll be ${age+1} years old next month.
`;

// template string을 사용하지 않을 경우
let sentence2:string = "sentence2 : Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age+1) + "years old next month.";

console.log(myName)
console.log(fullName)
console.log(age)
console.log(sentence1)
console.log(sentence2)
