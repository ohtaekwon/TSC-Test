
// "lib": ["ES2015","DOM"] 으로 설정해야 error가 안 난다.
console.log(Symbol('foo')=== Symbol('foo')) // false

const sym = Symbol(); // 고유한 형태의 값이 된다.

const obj = {
  // sym:"value",
  [sym] : "value",
}
// obj["sym"]
obj[sym] // 'value'

console.log(obj[sym])
