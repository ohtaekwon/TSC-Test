# 04. Access Modifiers

### 4.1. 접근 제어자 - public, private

- 타입스크립트는 기본적으로 외부에서 접근이 가능하다.

```ts
class Ch06Person4{
  public name:string='Mark';
  private age!:number;

  // 접근제어자 : public , private
  // 생성자 : constructor
  public constructor(age?:number){
    if(age===undefined){
      this.age=30;
    } else{
      this.age=age;
    }
  }
  // 메서드
  public async init(){

  }
}
const ch06_p4_1:Ch06Person4=new Ch06Person4(30);
// private 접근제어자 때문에,
// age가 나오지 않는다.
console.log(ch06_p4_1.age);

```

### 4.2 정리

- 접근 제어자에는 **public, pivate, protected**가 있다.
- 설정하지 않으면 **public** 이다.
- 클래스 내부의 모든 곳에 (생성자, 프로퍼티, 메서드)설정 가능하다.
- private 으로 설정하면 클래스 외부에서 접근할 수 없다.
- 자바스크립트에 private 지원하지 않아 오랫동안 프로퍼티나 메서드 이름 앞에 `_` 를 붙여서 표현했다.
