"use strict";
let personInterface = {};
let personType = {};
// 위는 같은 구조이기 때문에 서로 대입할 수 있다.
personInterface = personType;
personType = personInterface;
