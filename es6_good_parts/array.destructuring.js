
function foo() {
  return [1]
}

const [
  a, // 1
  b = 42, // 42 default
  c // undefined
] = foo()
console.log(a, b, c)
console.log('________________')

function foo1() {
  return null // null is not iterable
}

const [aa, bb = 42, cc] = foo1() || [] // If no "[]" this will throw the error. Null is not iterable
console.log(aa, bb, cc)
console.log('________________')

function foo2() {
  return [1, 2, 3, 4, 5, 6]
}

const [aaa, bbb, ...args] = foo2()
console.log(aaa, bbb, args); // 1 2 [ 3, 4, 5, 6 ]
console.log('________________');

var x = 10
var y = 20

console.log([x, y])
console.log([y, x])

// [y, x] = [x, y] // work only in REPL !
console.log(x, y)
console.log('________________');


[ , , ...abc] = [0, ...foo2(), 7] // Empty slots are allowed
console.log(abc)
console.log('________________');

const nestedArray = [1, 2, 3, [4, 5, 6]]
const [someVar, someVar1, someVar2, [someVar3]] = nestedArray // Nested destructuring
console.log(someVar3) // 4
console.log('________________');

const wholeArray = [variab, varib1] = nestedArray // result of assignement is whole array
console.log(wholeArray) // [1, 2, 3, [4, 5, 6]]