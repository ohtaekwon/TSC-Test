# 02. Primitive Type

<br>

### 2.1. Primitive Type의 종류

- 오브젝트와 레퍼런스 형태가 아닌 **실제 값을 저장하는 자료형이다.**
- 프리미티브 형의 내장 함수를 사용하는 것은 자바스크립트 처리 방식 덕분
- (ES2015 기준)6가지
  - boolean
  - number
  - string
  - symbol(ES2015)
  - null
  - undefined

```ts
  let name = 'mark';
  name.toString();
```

### 2.2. Primitive Type의 값

- literal 값으로 Primitive 타입의서브 타입을 나타낼 수 있다.

```ts
true;
'hello';
3.14; 
null;
undefined
```

- 또는 래퍼 객체로 만들 수 있다.

```ts
new Boolean(false); // typeof new Boolean(fasle) : 'object'
new String('world'); // typeof new String('world') : 'object'
new Number(42); // typeof new Number(42) : 'object'
```
<br>


### 2.3. Type Casing

- **TypeScript의 핵심 primitive types은 모두 소문자이다.**

```ts
function reverse(s:String):String{
  return s.split("").reverse().join("");
}
reverse("hello Wordl");
```
대신에 `number`, `string`, `boolean`, `object`, `symbol` 타입은 소문자로 사용한다. 

```ts
function reverse(s:string):string{
  return s.split("").reverse().join("");
}
reverse("hello World");
```


### 참고 사이트

- TypeScript 공홈 : [TSC HOME](https://www.typescriptlang.org/)
