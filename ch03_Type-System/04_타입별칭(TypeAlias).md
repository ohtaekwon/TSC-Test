# 04. 타입 별칭(Type Alias)

<br>

### 4.1. 타입별칭(별명)

- `interface`와 비슷해 보인다.
- **Primitive, Union Type, Tuple, Function**
- 기타 직접 작성해야하는 타입을 다른 이름을 지정할 수 있다.
- 만들어진 타입의 **refer** 로 사용하는 것이지 타입을 만드는 것은 아니다. 


### 4.2. Aliasing Primitive

```ts
type MyStringType = string;

const str = 'world';

let myStr:MyStringType = 'hello'l
myStr = str;

/*
  별 의미가 없다.. 
*/
```

### 4.3. Aliasing Union Type

```ts
let person : string|number 0;
person='mark';

type StringOrNumber = string|number;

let another:StringOrNumber = 0;
another='anan';

```

### 4.4. Aliasing Tuple

```ts
let person:[string, number]=['Mark',30];
type PersonTuple = [stirng, number];
let another:PersonTuple = ['Anna',30]

/*
  1. 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.
*/
```

### 4.5. Aliasing Function

```ts
type EatType=(food:string) => void;

```
