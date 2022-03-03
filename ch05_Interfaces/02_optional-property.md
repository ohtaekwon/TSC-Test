# 02. optional property


### 2.1. optional property - ? 의 사용

```ts
interface Person2{
  name:string;
  age?:number;
}

```
- `age?:number;` 은 `age` 가 있을 수도 있고, 없을 수도 있는 형태


### 2.2. optional property - indexable type

```ts
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
hello3(p33)

```