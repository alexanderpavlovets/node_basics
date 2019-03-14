const parent = {
  a: 1
}

const child = Object.create(parent)

console.log(parent.prototype)
console.log(parent.__proto__)
console.log(child.prototype)
console.log(child.__proto__)
console.log(child.a)

// ___________________
console.log('________________')

function ConstructorFunction() {
  this.name = 'Alex'
}

const instance = new ConstructorFunction()

console.log(instance)
console.log(instance.prototype) // undefined
console.log(instance.__proto__)
console.log(instance.constructor.prototype === instance.__proto__) // true
