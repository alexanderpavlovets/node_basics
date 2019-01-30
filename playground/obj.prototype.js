const parent = {
  a: 1
}

const child = Object.create(parent)

console.log(parent.prototype)
console.log(parent.__proto__)
console.log(child.prototype)
console.log(child.__proto__)
console.log(child.a)