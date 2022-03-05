# 04. class implements interface


### 4.1. class interface 


```ts
interface Iperson1{
  name:string;
  // optional
  age?:number;
  hello():void;
}

class Person implements Iperson1 {
  name: string;
  age?: number | undefined;

  constructor(name:string){
    this.name=name
  }
  
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`)
  }   
}

const person04 = new Person('Mark');
person04.hello();

```