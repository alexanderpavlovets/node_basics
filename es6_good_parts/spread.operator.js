
function foo (x, ...args) { // this is "Gather"
  bar(42, ...args) // this is "Spread"
}

function a(...args) {
  console.log(args)    // [ 1, 2, 3, 'somestuff', { a: 1 } ]  - "Gather" parameters. Assignement context
  console.log(...args) // 1, 2, 3, 'somestuff', { a: 1 } - "Spread".
}

a(1, 2, 3, 'somestuff', {a: 1})

console.log('____________________')

const arr1 = [1, 2, 3]
const arr2 = [4, 5]
const z = [0, ...arr1, ...arr2, 6]
console.log(z)

console.log('____________________')

function foo1(x, y, ...rest) {
  console.log(rest)
}

const arrA = [1, 2, 3]
const arrB = [4, 5, 6]

foo1(...arrA, ...arrB) // 1) Spread to 1,2,3,4,5,6. 2) Gather to ...rest. 3) Log [ 3, 4, 5, 6 ]

console.log('____________________')

const str = 'Hello'
console.log(...str)