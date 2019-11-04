
const Parent = function() {
  this.parentProp = 'parent own property'
}
const Child = function() {
  this.childProp = 'child own property'
}

Child.prototype = Object.create(Parent.prototype)

const parentInstance = new Parent()
const childInstance = new Child()

console.log(Parent.prototype)
console.log(Child.prototype)


// Child.prototype.constructor = Child // good practise.


// console.log(childInstance.childProp) //


// MDN example of change of constructor
// for ... in loop warning
// Object.defineProperty(Child.prototype, 'constructor', {
//   value: Child,
//   enumerable: false,
//   writable: false
// })
