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




#### 9.2.3 -