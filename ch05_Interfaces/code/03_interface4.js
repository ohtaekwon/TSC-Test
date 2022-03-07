"use strict";
const p41 = {
    name: 'Mark',
    age: 39,
    hello: function () {
        console.log(`안녕하세요. ${this.name} 입니다.`);
    },
};
const p42 = {
    name: 'Mark',
    age: 39,
    // function 키워드 없이
    hello() {
        console.log(`안녕하세요. ${this.name} 입니다.`);
    },
};
// const p43:Person4={
//   name:'Mark',
//   age:39,
//   // arrow function
//   // hello: (): void => {
//   //   console.log(`안녕하세요. ${this.name} 입니다.`)
//   // },
// error가 발생하낟.
// };
p41.hello(); // 안녕하세요. Mark 입니다.
p42.hello(); // 안녕하세요. Mark 입니다.
