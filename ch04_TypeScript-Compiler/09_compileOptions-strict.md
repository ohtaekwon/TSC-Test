# 09. complieOption - strict

<br>

### 9.1. complieOptions : strict

```ts
  "strict": {
    "description": "Enable all strict type checking options.",
    "type": "boolean",
    "default": false,
    "markdownDescription": "Enable all strict type checking options.\n\nSee more: https://www.typescriptlang.org/tsconfig#strict"

```

### 9.2 Enable all strict type checking options.
- `--noImplicitAny`
- `--noImplicitThis`
- `--strictNullChecks`
- `--strictFunctionTypes`
- `--strictPropertyInitialization`
- `--strictBindCallApply`
- `--alwaysStrict`

#### 9.2.1. --noImplicitAny

> 명시적이지 않게 any 타입을 사용하여, 표현식과 선언에 사용하면, 에러를 발생.

![ch04_09_1](https://github.com/ohtaekwon/TSC-Test/blob/master/img/ch04_09_1.png?raw=true)

- 타입스크립트가 추론을 실패한 경우, any가 맞으면, any라고 지정하라.
- 아무것도 쓰지 않으면, 에러를 발생
- 이 오류를 해결하면, any라고 지정되어 있지 않은 경우는 any가 아닌 것이다.(타입 추론이 되었으므로)

#### 9.2.2 --noImplicitThis

> 명시적이지 않게 any타입을 사용하여, this표현식에 사용하면, 에러를 발생한다.

![ch04_09_2](https://github.com/ohtaekwon/TSC-Test/blob/master/img/ch04_09_2.png?raw=true)

![ch04_09_3.png]()


- 첫번째 매개변수 자리에 `this`를 놓고, `this`에 대한 타입을 어떤 것이라도 표현하지 않으면, `noImplicitAny`가 오류를 발생시킨다.
- JavaScript에서는 매개변수에 `this`를 넣으면, 이미 예약된 키워드라 `SyntaxError`를 발생시킨다.
- call / apply / bind 와 같이 `this`를 대체하여 함수 콜을 하는 용도로도 쓰인다.
- 그래서 `this`를 any로 명시적으로 지정하는 것은 합리적이다.(물론 구체적인 사용처가 있는 경우 타입을 표현한다.)


![ch04_09_4.png]()

- Class에서는 this를 사용하면서, `noImplictThis`와 관련된 에러가 나지 않는다.
- Class에서 `constructor`를 제외한 멤버 함수의 첫번쨰 매개변수도 일반 함수와 마찬가지로 `this`를 사용할 수 있다.


#### 9.2.3 --strictNullChecks

- strictNullChecks 모드에서는, null 및 undefined 값이 모든 유형의 도메인에 속하지 않으며, 그 자신을 타입으로 가지거나 any일 경우에만 할당이 가능하다.
- 한 가지 예외는 `undefined` 에 `void` 할당 가능

![ch04_09_5.png]()

- strictNullChecks를 작용하지 않으면,
    - 모든 타입은 null, undefined 값을 가질 수 있다.
    - string으로 타입을 지정해도, null 혹은 undefined값을 할당할 수 있다.

![ch04_09_6.png]()

- strictNullChecks를 적용하면,
    - 모든 타입은 null, undefined 값을 가질 수 없고, 가지려면 union type을 이용해서 직접 명시해야 한다.
    - any타입은 null과 undefined를 가진다. 예외적으로 void타입의 경우 undefined를 가진다.
- strictNullChecks를 적용하지 안혹, 어떤 값이 null과 undefined를 가진다는 것을 암묵적으로 인정하고 계속 사용하다 보면, 정확히 어떤 타입이 오는지를 개발자 스스로가 간과할 수 있다.
- 정말로, null과 undefined를 가질수 있는 경우, 해당 값을 조건부로 제외하고 사용하는 것이 좋다.
- 이 옵션을 켜고 사용하는 경우,
- 사용하려는 함수를 선언할 때부터 매개변수와 리턴 값에 정확한 타입을 지정하려는 노력을 기울여야하고, 기울이게 될 것이다.