"use strict";
function error(message) {
    // throw를 하면서 함수 종료
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) { }
}
if (typeof a !== 'string') {
    a;
}
