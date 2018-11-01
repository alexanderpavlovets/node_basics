// const a = null
// const fs = require('fs')
// const path = require('path')

// const b = { ...a }

// console.log(b)

// const i = 5
// console.log(Math.random() * i)
// console.log(Math.random() * i)
// console.log(Math.random() * i)

// console.log(fs.readdirSync(path.join(process.cwd(), '../')))

console.log('_______')

const obj = {
  a: 1,
  b: 2,
  c: 3
}
const arr = [1, 2, 3, 4, 5]

function myFunc(argum) {
  const [b, ...restb] = argum
  const {a, ...rest} = argum
  // console.log(a)
  console.log(restb)
  // console.log(rest.lengt)
}

myFunc(arr)