# 02. Quick Start - class

### 2.1. class란 무엇인가?

```ts
class ch06Person{}

const ch06_p1 = new ch06Person();

console.log(ch06_p1); // ch06Person {}

```



```ts
class ch06Person{
  // 프로퍼티로 사용하기 위해서는
  name;

  constructor(name:string){
    this.name=name;
  }
}

const ch06_p1 = new ch06Person('Mark');

console.log(ch06_p1); // ch06Person { name: 'Mark' }

```

- class 키워드를 이용하여 클래스를 만들 수 있다.
- class 이름은 보통 대문자를 이용한다.
- new를 이용하여 class를 통해 object를 만들 수 있다.
- constructor를 이용하여 object를 생성하면서 값을 전달할 수 있다.
- this를 이용해서 만들어진 object를 가리킬 수 있다.
- JS로 컴파일되면 ES5의 경우 function으로 변경된다. 