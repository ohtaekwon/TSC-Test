# 03. 타입 호환성(Type Compatibility)

<br>

### 서브타입(1)
```ts
// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1:1 = 1;
let sup1:number = sub1; // number가 1 보다 더 큰 타입이다.
// 따라서, sup1이에는 sub1을 넣을 수 있다.
sub1= sup1; // error Type 'number' is not assignable to type '1'.

// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2:number[]=[1]; // number로 된 Array 타입
let sup2:object = sub2; // Array도 Object 중 하나이기 때문에 sup2에 sub2를 할당할 수 있다.
// 반대는 성립하지 않음
sub2=sup2; // error Type '{}' is missing the following properies from type 'number[]': lenght, pop, push, concat, and 16 more.

// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3:[number,number]=[1,2]; // 튜플 타입
let sup3:number[]=sub3;
sub3 = sup3; // error! Type 'number[]' is not assignable to type '[number,number]'. Target requres 2 element(s) but source may have fewer.
```

### 서브타입(2)
```ts
// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4:number=1;
let sup4:any=sub4;
sub4=sup4;

// sub5 타입은 sup5 타입의 서브 타입이다.
let sub5:never = 0 as never;
let sup5:number=sub5;
sub5=sup5; // error! Type 'number' is not assignable to type 'never'.

class Animal{}
class Dog extends Animal{
  eat(){}
}

// sub6 타입은 sup6 타입의 서브 타입이다.
let sub6:Dog=new Dog();
let sup6:Animal=sub6;
sub6 = sup6; // error
```

### 1. 같거나 서브 타입인 경우, 할당이 가능하다. = 공변

```ts
// primitive type
let sub7:string='';
let sup7:string|number=sub7;

// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입어야 한다.
let sub8:{a:string, b:number}=[{a:'',b:1}];
let sup8:{a:string|number;b:number}=sub8;

// array - object와 마찬가지
let sub9:Array<a{string; b:number}> = [{a:'',b:1}];
let sub9:Array<{a:string|number; b:number}> = sub8;

```

### 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 겨웅, 할당이 가능하다. = 반병

```ts
class Person{}
class Developer extends Person{
  coding(){}
}
class StartupDeveloper extends Developer{
  burning(){}
}
// tellme라는 함수의 인자에 f라는 함수가 들어감
// f함수는 Developer를 인자로 받고 Developer를 return하는 함수이다.
function tellme(f:(d:Developer)=>Developer){}

// Developer => Devleoper 에다가 Developer => Developer를 할당하는 경우
tellme(function dToD(d:Developer):Developer{
  return new Developer();
});

// Developer => Developer 에다가 Person => Developer를 할당하는 경우
tellme(function pToD(d:Person):Developer{
  return new Developer();
});

// Developer => Developer 에다가 StartipDeveloper => Developer를 할당하는 경우
tellme(function sToD(d:StartupDeveloper):Developer{
  return new Developer();
});
```

### strictFunctionTypes 옵션을 켜면

- 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌 경우, 에러를 통해 경고한다.

```ts
// 에러가 발생한다.

// Developer => Developer 에다가 StartipDeveloper => Developer를 할당하는 경우
tellme(function sToD(d:StartupDeveloper):Developer{
  return new Developer();
});

```