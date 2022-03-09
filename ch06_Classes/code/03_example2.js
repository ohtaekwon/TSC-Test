"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Ch06Person2_1 {
    constructor(age) {
        // 프로퍼티로 사용하기 위해서는
        this.name = "OHTK";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
const ch06_p2_1 = new Ch06Person2_1(30);
// const ch06_p2_2:Ch06Person2_1= new Ch06Person2_1();
console.log(ch06_p2_1); // Ch06Person2_1 { name: 'OHTK', age: 30 }
console.log(ch06_p2_1.age); // 30
