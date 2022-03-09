"use strict";
class Ch06Person2 {
    constructor() {
        // 프로퍼티로 사용하기 위해서는
        this.name = "OHTK";
    }
}
const ch06_p2 = new Ch06Person2();
console.log(ch06_p2); // ch06Person {}
ch06_p2.age = 30;
console.log(ch06_p2.age); // 30
