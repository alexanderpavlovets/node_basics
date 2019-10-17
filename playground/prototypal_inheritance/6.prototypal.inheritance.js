
const Parent = function() {
  this.parentProp = 'parent own property'
}
const Child = function() {
  this.childProp = 'child own property'
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child // good practise.

Child.prototype.addedPropToChild = 'child prototype property'
Parent.prototype.addedPropToParent = 'parent prototype property'

const parentInstance = new Parent()
const childInstance = new Child()


console.log(childInstance.childProp)
console.log(childInstance.addedPropToChild)
console.log(childInstance.addedPropToParent)
console.log(Child.prototype)
console.log(Parent.prototype)

// MDN example of change of constructor
// for ... in loop warning
// Object.defineProperty(Child.prototype, 'constructor', {
//   value: Child,
//   enumerable: false,
//   writable: false
// })
