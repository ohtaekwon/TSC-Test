# 06. compileOptions - typeRoots, types


### 6.1. type이란?

- 프로젝트에서 라이브러리를 사용할때, 라이브러리에 타입핑이 안 되어있는 자바스크립트 라이브러리를 사용할 경우에 거기에 타입을 지정해주는 역할을 하는 도구

> 예를 들어 - 리액트를 사용할때

- 터미널에 `npm i react` 를 입력
- 타입스크립트 상단에 다음과 같이 입력

```ts
import React from "react";
// 외부 JS라비르러리에 대한 타이핑이 되어 있지 않다고 나온다.
```
- 다시 터미널로 돌아와서, `npm i --save-dev @types/react` 를 입력한다.
- node_modules 폴더 안에 react안의 폴더에 `index.d.ts` 파일이 생성

<br/>

### 6.2. compileOptions - schema

```ts
// typeRoots
"typeRoots": {
  "description": "Specify multiple folders that act like `./node_modules/@types`.",
  "type": "array",
  "uniqueItems": true,
  "items": {
    "type": "string"
  },
  "markdownDescription": "Specify multiple folders that act like `./node_modules/@types`.\n\nSee more: https://www.typescriptlang.org/tsconfig#typeRoots"
},

// types : 패키지 네임을 쓰는것
"types": {
  "description": "Specify type package names to be included without being referenced in a source file.",
  "type": "array",
  "uniqueItems": true,
  "items": {
    "type": "string"
  },

```

### 6.2. @types

- TypeScript 2.0 부터 사용 가능해진 내장 `type definition` 시스템
- 아무 설정을 안하면?
    - `node_modules/@types` 라는 모든 경로를 찾아서 사용
- `typeRoots` 를 사용하면?
    - 배열 안에 들어있는 경로들 아래서만 가져온다.
- `types` 를 사용하면?
    - 배열 안의 모듈 혹은 `./node_modules/@types/` 안의 모듈 이름에서 찾아온다.
    - [] 빈 배열을 넣는다는건 이 시스템을 이용하지 않겠다는 것이다.
- `typeRoots` 와 `types` 를 같이 사용하지 않는다.