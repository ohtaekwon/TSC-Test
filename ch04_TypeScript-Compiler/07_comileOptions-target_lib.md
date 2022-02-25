# 07. complieOption - target 과 lib

<br>

### 7.1. complieOptions : target

```ts
"target": {
  "description": "Set the JavaScript language version for emitted JavaScript and include compatible library declarations.",
  "type": "string",
  "default": "ES3",
  "anyOf": [
    {
      "enum": [
        "ES3",
        "ES5",
        "ES6",
        "ES2015",
        "ES2016",
        "ES2017",
        "ES2018",
        "ES2019",
        "ES2020",
        "ES2021",
        "ES2022",
        "ESNext"
      ]
    },
    {
      "pattern": "^([Ee][Ss]([356]|(20(1[56789]|2[012]))|[Nn][Ee][Xx][Tt]))$"
    }
  ],
  "markdownDescription": "Set the JavaScript language version for emitted JavaScript and include compatible library declarations.\n\nSee more: https://www.typescriptlang.org/tsconfig#target"
},
```


### 7.2. complieOptions : lib

```ts




```


### 7.3. target 과 lib

- target
    - 빌드의 결과물을 어떤 버전으로 할 것이냐
    - 지정을 안하면 `es3` 이다.
- lib
    - 기본 `type definition` 라이브러리를 어떤 것을 사용할 것인가
    - lib를 지정하지 않을 때,
        - target이 `'es3'` 이고, 디폴트로 `lib.d.ts` 를 사용한다.
        - target이 `'es5'` 이면, 디플토르 `dom`, `es5`, `scripthost` 를 사용한다.
        - target이 `'es6'` 이면, 디플트로 `dom`, `es6`, `dom.iterable`, `scripthost` 를 사용한다.
    - lib를 지정하면 그 lib 배열로만 라이브러리를 사용한다.
        - 빈 [] => `'no defintion found'`