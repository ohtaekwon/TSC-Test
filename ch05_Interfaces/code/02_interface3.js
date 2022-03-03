"use strict";
function hello3(person) {
    console.log(`안녕하세여! ${person.name} 입니다.`);
}
const p31 = {
    name: 'TK',
    age: 30,
};
const p32 = {
    name: 'Mark',
    syster: ['Sung', 'Chan']
};
const p33 = {
    name: 'duckgu',
    father: p31,
    mother: p32,
};
hello3(p33);
