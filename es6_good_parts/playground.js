const arr = [1, 2, 3, 4, 5]

const a = arr.reduce((acc, cur) => cur % 2 === 0 ? acc + cur : acc, 0)
const b = arr.reduce((acc, cur, ind) => {
  acc = cur % 2 === 0 ? acc + cur : acc
  return acc
}, 0)
const c = arr.reduce((acc, cur, ind) => {
  return cur % 2 === 0 ? acc + cur : acc
}, 0)

console.log('Equal reduces:')
console.log(a)
console.log(b)
console.log(c)

console.log('________________')
