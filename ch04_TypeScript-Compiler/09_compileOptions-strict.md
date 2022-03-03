# 09. complieOption - strict


### 9.1. complieOptions : strict

- 무조건, 작업할 때, `strict`를 `true`로 설정하는 것이 기본이다. 

```ts
"strict": {
    "description": "Enable all strict type checking options.",
    // 엄격하게 타입을 확인하는 옵션을 활성화 한다. 
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

> `noImplicitAny` 사용할  때, 인덱스 객체에 인덱스 signature가 없는 경우 오류가 발생하는데 이를 예외처리 한다.

![ch04_09_1_1](https://github.com/ohtaekwon/TSC-Test/blob/master/img/ch04_09_1_1.png?raw=true)

- obj['foo']로 사용할 때, 인덱스 객체라 판단하여, 타입에 인덱스 시그니처가 없는 경우, 에러를 발생시킨다.
- 이때, `supperssImplicitAnyIndexErrors` 옵션을 사용하면, 이런 경우 예외로 간주하여, 에러를 발생시키지 않는다.


#### 9.2.2 --noImplicitThis

> 명시적이지 않게 any타입을 사용하여, this표현식에 사용하면, 에러를 발생한다.

![ch04_09_2](https://github.com/ohtaekwon/TSC-Test/blob/master/img/ch04_09_2.png?raw=true)

![ch04_09_3.png](https://github.com/ohtaekwon/TSC-Test/blob/master/img/ch04_09_3.png?raw=true)


- 첫번째 매개변수 자리에 `this`를 놓고, `this`에 대한 타입을 어떤 것이라도 표현하지 않으면, `noImplicitAny` 가 오류를 발생시킨다.
- JavaScript에서는 매개변수에 `this`를 넣으면, 이미 예약된 키워드라 `SyntaxError`를 발생시킨다.
- call / apply / bind 와 같이 `this`를 대체하여 함수 콜을 하는 용도로도 쓰인다.
- 그래서 `this`를 any로 명시적으로 지정하는 것은 합리적이다.(물론 구체적인 사용처가 있는 경우 타입을 표현한다.)


![ch04_09_4.png](https://github.com/ohtaekwon/TSC-Test/blob/master/img/ch04_09_4.png?raw=true)

- Class에서는 this를 사용하면서, `noImplictThis`와 관련된 에러가 나지 않는다.
- Class에서 `constructor`를 제외한 멤버 함수의 첫번쨰 매개변수도 일반 함수와 마찬가지로 `this`를 사용할 수 있다.


#### 9.2.3 --strictNullChecks

- `strictNullChecks` 모드에서는, `null` 및 `undefined` 값이 모든 유형의 도메인에 속하지 않으며, 그 자신을 타입으로 가지거나 any일 경우에만 할당이 가능하다.
- 한 가지 예외는 `undefined` 에 `void` 할당 가능

![ch04_09_5.png](https://github.com/ohtaekwon/TSC-Test/blob/master/img/ch04_09_5.png?raw=true)

- strictNullChecks를 작용하지 않으면,
    - 모든 타입은 null, undefined 값을 가질 수 있다.
    - string으로 타입을 지정해도, null 혹은 undefined값을 할당할 수 있다.

![ch04_09_6.png](https://github.com/ohtaekwon/TSC-Test/blob/master/img/ch04_09_6.png?raw=true)

- `strictNullChecks` 를 적용하면,
    - 모든 타입은 null, undefined 값을 가질 수 없고, 가지려면 union type을 이용해서 직접 명시해야 한다.
    - any타입은 null과 undefined를 가진다. 예외적으로 void타입의 경우 undefined를 가진다.
- `strictNullChecks` 를 적용하지 안혹, 어떤 값이 null과 undefined를 가진다는 것을 암묵적으로 인정하고 계속 사용하다 보면, 정확히 어떤 타입이 오는지를 개발자 스스로가 간과할 수 있다.
- 정말로, null과 undefined를 가질수 있는 경우, 해당 값을 조건부로 제외하고 사용하는 것이 좋다.
- 이 옵션을 켜고 사용하는 경우,
- 사용하려는 함수를 선언할 때부터 매개변수와 리턴 값에 정확한 타입을 지정하려는 노력을 기울여야하고, 기울이게 될 것이다.


#### 9.2.4 --strictFunctionTypes

> 함수 타입에 대한 bivariant 매개변수 검사를 비활성화합니다?

Question : Which of the following types could be subtypes of `Dog -> Dog` ?
즉, Dog -> Dog라고 하는 함수형태의 서브 타입이 맞는가?를 확인할 때,  
1. `Greyhound -> Greyhound`
2. `Greyhound -> Animal`
3. `Animal -> Animal`
4. `Animal -> Greyhound`


- 반환타입은 공변적(covariant)
- 인자타입은 반공변적(contravariant)
- 그런데 타입스크립트에서 인자 타입은 공변적이면서, 반공변적인게 문제
- 이 문제를 해결하는 옵션이 `strictFunctionTypes`
- 옵션을 켜면, 에러가 안나던걸 에러 나게 한다.

![ch04_09_02_04_1](https://github.com/ohtaekwon/TSC-Test/blob/master/img/ch04_09_02_04_1.png?raw=true)

이전에는 위와 같은 코드도 에러를 발생키지 않았지만, 이제는 에러가 발생하게 된다.


#### 9.2.5 --strictPropertyInitialization

> 정의되지 않은 클래스의 속성이 생성자에서 초기화되었는지 확인한다. 이 옵션을 사용하려면 `--strictNullChecks`를 사용하도록 설정해야 한다.

![ch04_09_02_05_1](https://github.com/ohtaekwon/TSC-Test/blob/master/img/ch04_09_02_05_1.png?raw=true)

##### constructor 에서 초기 값을 할당한 경우=> 정상

![ch04_09_02_05_2](https://github.com/ohtaekwon/TSC-Test/blob/master/img/ch04_09_02_05_2.png?raw=true)


##### constructor 에서 안하는 경우

- 보통 다른 함수로 이니셜라이즈 하는 경우(asunc 함수)
- constructor 에는 async를 사용할 수 없다.

![ch04_09_02_05_3](https://github.com/ohtaekwon/TSC-Test/blob/master/img/ch04_09_02_05_3.png?raw=true)

#### 9.2.6--strictBindCallApply

> Enable stricter checking of the bind, call, and apply, methods on functions.

bind, call, apply에 대한 더 염격한 검사를 수행

    - Function 의 내장 함수의 bind / call / apply 를 사용할 때, 엄격하게 체크하도록 하는 옵션이다.
    - bind 는 해당 함수안에서 사용할 this와 인자를 설정해주는 역할을 하고, call 과 apply 는 this와 인자를 설정한 후, 실핼까지 한다.
    - call 과 apply 는 인자를 설정하는 방식에서 차이점이 있다.
        - call 은 함수의 인자를 여러 인자의 나열로 넣어서 사용하고, apply는 모든 인자를 배열 하나로 넣어서 사용한다.


#### 9.2.7 --alwaysStrict

> 각 소스 파일에 대해 Javascirpt 의 strict mode 로 코드를 분석하고, "엄격하게 사용"을 해제한다.