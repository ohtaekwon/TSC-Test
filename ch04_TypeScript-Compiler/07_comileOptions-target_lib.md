# 07. complieOption - target 과 lib


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
-  `target` 에 따라서, 컴파일된 소스코드가 달라질 수 있다.

### 7.2. complieOptions : lib

```ts
"lib": {
  "description": "Specify a set of bundled library declaration files that describe the target runtime environment.",
  "type": "array",
  "uniqueItems": true,
  "items": {
    "type": "string",
    "anyOf": [
      {
        "enum": [
          "ES5",
          "ES6",
          "ES2015",
          "ES2015.Collection",
          "ES2015.Core",
          "ES2015.Generator",
          "ES2015.Iterable",
          "ES2015.Promise",
          "ES2015.Proxy",
          "ES2015.Reflect",
          "ES2015.Symbol.WellKnown",
          "ES2015.Symbol",
          "ES2016",
          "ES2016.Array.Include",
          "ES2017",
          "ES2017.Intl",
          "ES2017.Object",
          "ES2017.SharedMemory",
          "ES2017.String",
          "ES2017.TypedArrays",
          "ES2018",
          "ES2018.AsyncGenerator",
          "ES2018.AsyncIterable",
          "ES2018.Intl",
          "ES2018.Promise",
          "ES2018.Regexp",
          "ES2019",
          "ES2019.Array",
          "ES2019.Object",
          "ES2019.String",
          "ES2019.Symbol",
          "ES2020",
          "ES2020.BigInt",
          "ES2020.Promise",
          "ES2020.String",
          "ES2020.Symbol.WellKnown",
          "ESNext",
          "ESNext.Array",
          "ESNext.AsyncIterable",
          "ESNext.BigInt",
          "ESNext.Intl",
          "ESNext.Promise",
          "ESNext.String",
          "ESNext.Symbol",
          "DOM",
          "DOM.Iterable",
          "ScriptHost",
          "WebWorker",
          "WebWorker.ImportScripts",
          "Webworker.Iterable",
          "ES7",
          "ES2021",
          "ES2020.SharedMemory",
          "ES2020.Intl",
          "ES2021.Promise",
          "ES2021.String",
          "ES2021.WeakRef",
          "ESNext.WeakRef",
          "es2021.intl"
        ]
      },
      {
        "pattern": "^[Ee][Ss]5|[Ee][Ss]6|[Ee][Ss]7$"
      },
      {
        "pattern": "^[Ee][Ss]2015(\\.([Cc][Oo][Ll][Ll][Ee][Cc][Tt][Ii][Oo][Nn]|[Cc][Oo][Rr][Ee]|[Gg][Ee][Nn][Ee][Rr][Aa][Tt][Oo][Rr]|[Ii][Tt][Ee][Rr][Aa][Bb][Ll][Ee]|[Pp][Rr][Oo][Mm][Ii][Ss][Ee]|[Pp][Rr][Oo][Xx][Yy]|[Rr][Ee][Ff][Ll][Ee][Cc][Tt]|[Ss][Yy][Mm][Bb][Oo][Ll].[Ww][Ee][Ll][Ll][Kk][Nn][Oo][Ww][Nn]|[Ss][Yy][Mm][Bb][Oo][Ll]))?$"


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