const likePrototype = {
  a: 1
}
const obj = Object.create(likePrototype)
console.log(obj) // {}
console.log(obj.a) // 1

console.log('______________________')

Object.defineProperties(obj, {aa: {value: '11'}})
console.log(obj) // {}
console.log(obj.aa) // 11
console.log(obj.hasOwnProperty('aa')) // false
console.log(obj.__proto__) // {a:1}

console.log(Object.keys(obj)) // [] shows OWN propertis
