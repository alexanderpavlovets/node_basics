
// Set stores uniq values of any type
// Iterates on values in insertion order

const set = new Set([1, 2, 3, 4, 5, 5, 5])
console.log(set) // Set { 1, 2, 3, 4, 5 }
console.log(typeof set) // object
console.log(set[1]) // undefined

console.log('______________')

const a = {a: 1}
const b = {b: 2}
const setContainingObjects = new Set([1, 2, a, b, a]) // a in set only once. size = 4
console.log(setContainingObjects)
console.log(Array.from(setContainingObjects))
console.log(setContainingObjects.size) // 4

console.log('_________________')

const setUsual = new Set([1, 2, 3, 4, 5])
console.log(setUsual.keys()) // same as values
console.log(setUsual.values())
console.log(setUsual.has(3))

setUsual.forEach((elInSet) => console.log(`Iterating on ${elInSet}`))