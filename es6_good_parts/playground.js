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


console.log('Swap the parameters')
function foo (x, y) {
  console.log(`Got X=${x} Y=${y}`)

  if (x > y) {
    console.log('Swap!');
    [y, x] = [...arguments]
  }
  console.log(`X is ${x}`)
  console.log(`Y is ${y}`)
}

foo(3, 1)
foo(1, 5)

console.log('________________')
