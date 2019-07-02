// placeholder

const Human = {name: 'nameValue'}
const a = Object.create(Human)
Human.newProp = 'newProp'
console.log(a)
console.log(a.name)
console.log(a.__proto__)
// ______________________

const Parent = function() {
  this.parentProp = 'parentProp'
}
const Child = function() {
  this.childProp = 'childProp'
}
Object.assign(Child.prototype, Parent.prototype)

Child.prototype.appendProperty = function() {
  console.log('appended')
}

Parent.prototype.parentAppend = 'appended to parent'

const parentInstance = new Parent()
const childInstance = new Child()

childInstance.appendProperty()
console.log(childInstance.parentAppend)
// parentInstance.appendProperty() // Error

// ______________________
console.log('************************')

const Parent1 = function() {
  this.parentProp = 'parentProp'
}
const Child1 = function() {
  this.childProp = 'childProp'
}

Child1.prototype = Object.create(Parent1.prototype)
// Redefine .constructor of Child1 now it is pointing to Parent1

Child1.prototype.appendProperty = function() {
  console.log('appended')
}

Parent1.prototype.parentAppend = 'appended to parent'

console.log(Child1.__proto__) // Function
console.log(Child1.__proto__.__proto__) // {} ... must be Object
console.log(Child1.__proto__.__proto__.__proto__) // null
console.log(typeof Child1.__proto__) // function
console.log(Child1.__proto__.constructor) // [Function: Function]
console.log(Child1.__proto__.__proto__.constructor) // [Function: Object]


const parentInstance1 = new Parent1()
const childInstance1 = new Child1()
childInstance1.appendProperty()
console.log(childInstance1.parentAppend)
// Child1.prototype.__proto__.appendProperty = function() {
//   console.log('appended')
// }
// parentInstance1.appendProperty() // Error