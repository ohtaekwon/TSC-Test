"use strict";
let x;
// 항상 순서와, 타입과 길이가 맞아야한다.
x = ["hello", 39];
// 2. 순서와 타입이 일치해야한다.
// x = [10,"world"] /* 두 개 다 문제가 있다고 나온다. */
// 3. 길이가 일치해야한다.
// x[3] = "world"
// x[2] = "world";
const person = ["Mark", 39];
// 디스트럭쳐링
const [first, second, /*third*/] = person;
