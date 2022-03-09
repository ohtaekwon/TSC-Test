# 03. constructor & initialize


### 3.1. class내의 에러 발생

```ts
class Ch06Person2{
  // 프로퍼티로 사용하기 위해서는
  // 직접 값을 세팅해주거나, constructor을 통해서 할당하지 않으면 문제가 발생한다.
  name:string="OHTK";
  age:number=30;
}

const ch06_p2 = new Ch06Person2();

console.log(ch06_p2); // Ch06Person2 { name: 'OHTK', age: 30 }

ch06_p2.age=30;
```


### 3.2 class의 ! 사용

```ts
class Ch06Person2{
  // 프로퍼티로 사용하기 위해서는
  // 직접 값을 세팅해주거나, constructor을 통해서 할당하지 않으면 문제가 발생한다.
  name:string="OHTK";

  // 어딘가에서 직접 값을 할당하겠다 할 떄는, !를 쓰고
  // 에러가 발생하지 않게 된다.
  age!:number;
  age!:number;
}
ch06_p2.age=30;
``` 
- 이때, `ch06_p2.age=30;` 처럼 `age`의 값을 할당하지 않게 된다면, 에러가 발생하게 된다.


### 3.3 constructor 을 사용하는 방법

```ts
class Ch06Person2_1{
  // 프로퍼티로 사용하기 위해서는
  name:string="OHTK";
  age:number;
  constructor(age:number){
    this.age=age;

  }
}

const ch06_p2_1:Ch06Person2_1= new Ch06Person2_1(30);

console.log(ch06_p2_1)
console.log(ch06_p2_1.age); 
}


```


### 3.4 정리

- 생성자 함수가 없으면, 디폴트 생성자가 불린다.
- 프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
- strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.
- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 `!` 를 붙여서 위험을 표현한다.
- 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 `undefined` 이다.
- 생성자에는 `async`를 설정할 수 없다.