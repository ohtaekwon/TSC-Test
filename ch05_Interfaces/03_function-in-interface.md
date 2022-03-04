# 03. function in interface


### 3.1. 함수 사용

```ts

interface Person4{
  name:string;
  age:number;
  hello():void;
}

// 일반적인 형태
// function 키워드 사용
const p41:Person4={
  name:'Mark',
  age:39,
  hello:function():void{
    console.log(`안녕하세요. ${this.name} 입니다.`)
  },
};

// function 키워드 생략
const p42:Person4={
  name:'Mark',
  age:39,
  // function 키워드 없이
  hello():void{
    console.log(`안녕하세요. ${this.name} 입니다.`)
  },
};

const p43:Person4={
  name:'Mark',
  age:39,
  // arrow function
  hello: (): void => {
    console.log(`안녕하세요. ${this.name} 입니다.`)
  },
  // error가 발생한다.
};
```

- this를 사용

```ts
interface Person4{
  name:string;
  age:number;
  hello():void;
}

const p42:Person4={
  name:'Mark',
  age:39,
  // function 키워드 없이
  hello(this:Person4):void{
    console.log(`안녕하세요. ${this.name} 입니다.`)
  },
};


```