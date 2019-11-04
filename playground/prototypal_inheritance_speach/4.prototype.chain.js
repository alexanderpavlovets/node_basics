
const parentObject = {
  a:1
}
const childObject = {
  b: 2
}
// Ask the solution in one string:

console.log(childObject.a) // undefined, but we need 1


// 
// const arr = [1,2,3]

// console.log(arr.hasOwnProperty('hasOwnProperty')) // possible to call hasOwnProperty
// console.log(arr.__proto__.hasOwnProperty('hasOwnProperty'))
// console.log(arr.__proto__.__proto__.hasOwnProperty('hasOwnProperty'))

// console.log(Object.prototype.hasOwnProperty('hasOwnProperty'))


// Main take-away - prototype advantages:
// - protoype it is just an object
// - prototypes store shared data = one place of realization
// - that's why every literally created array has .map .filter ect.
// - prototype chain it is chain of __proto__s