
const Parent = function() {
  this.parentProp = 'parent own property'
}
const Child = function() {
  this.childProp = 'child own property'
}

Child.prototype.myProp = 1
Child.prototype.myProp2 = 2


Child.prototype = Object.create(Parent.prototype)
Object.defineProperty(Child.prototype, 'constructor', {
  value: Child,
  enumerable: false,
  writable: false
})

const parentInstance = new Parent()
const childInstance = new Child()


console.log(childInstance.myProp)
console.log(childInstance.myProp2)





// Child.prototype = Object.assign(Object.create(Parent.prototype), Child.prototype)


// Flexibility:
// Don't do that:
// childInstance.__proto__.__proto__.appendProperty = function() {
//   console.log('appended')
// }
// parentInstance.appendProperty()
