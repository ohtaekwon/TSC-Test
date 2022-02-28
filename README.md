# TypeScript Essentials

- [Ch1. TypeScript]()
- [Ch2. Basic Types](https://github.com/ohtaekwon/TSC-Test/tree/master/ch02_Basic-Types)
- [Ch3. Type System](https://github.com/ohtaekwon/TSC-Test/tree/master/ch03_Type-System)
- [Ch4. TypesScirpt Compiler](https://github.com/ohtaekwon/TSC-Test/tree/master/ch04_TypeScript-Compiler)
- [Ch5. Interfaces]()
- [Ch6. Classes]
- [Ch7. Generics]


### 2. TypeScript Install

#### 2.1. 자바스크립트 실행 환경 설치

##### 2.1.1. node.js
  - Chrome's  V8 Javascript Engine을 사용하여, 자바스크립트를 해석하고 OS레벨에서의 API를 제공하는 서버사이드 용 자바스크립트 런타임 환경

  1) node.js 설치
  - https://nodejs.org
    - v14.16.0 LTS
    - v15.12.0 Current



##### 2.1.2. browser
  - HTML을 동적으로 만들기 위해 브라우저에서 자바스크립트를 해석하고, `DOM` 을 제어할 수 있도록 하는 자바스크립트 런타임 환경


### 3. TypeScript Project 

#### 3.1. 실행방법

- 터미널에 `mkdir 폴더명`으로 이동 후, `cd 해당 위치` 이동
- `npm init -y` 입력
- `npm i typescript -D` : 타입 스크립트 설치
- 타입스크립트 컴파일 : `npx tsc --init`
    - 루트 경로에 `tsconfig.json` 파일이 생성된다. 
- default 설정 : `Type Checking` 으로 주석처리된 부분의 `"strict":true,`이 `true`로 설정되어 있으면 된다. 

#### 3.2. default 설정

- `tsconfig.json` 파일에서 `"strict" : true` 가 되어있는지를 확인한다. 