# 01. TypeScript Type vs JavaScript Type

<br>

1. TypeScript : Static Types.
    - set during development
2. JavaScript : Dynamic Typse.
    - resolved at runtime

<br>

- 프로그램이 유용하려면, 가장 간단한 데이터 단위로 작업 할 수 있어야 한다.
 - numbers, strings, structures, boolean 값 등등
- TypeScript 에서는 Javascript 에서 기대하는 것과 동일한 타입을 지원하며, 돕기 위해 추가적인 열거 타입이 제공된다.
- TypeScript 에서 프로그램 작성을 위해 기본 제공하는 데이터 타입
- **사용자가 만든 타입은 결국은 이 기본 자료형들로 쪼개진다.**
- Javascript 기본 자료형을 포함(superset)
    - **ECMAScript 표준에 따른 기본 자료형은 6가지**
      - Boolean
      - Number
      - String
      - Null
      - Undefined
      - Symbol(ECMAScript6 에 추가)
      - ***Array : object 형 (기본 자료형과 다른 object형)***
    - **프로그래밍을 도울 몇가지 타입이 더 제공된다.**
      - Any, Void, Never, Unkwon
      - Enum
      - Tuple: object 형   

<br>
