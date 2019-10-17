
// literally adding .prototype
console.log('********* .prototype')
function action() {}
action.prototype.propPrototype = 'property in .prototype'

const actionInstance = new action()
actionInstance.propInstance = 'property in instance'

console.log(actionInstance.propInstance)
console.log(actionInstance.propPrototype)


// literally adding .__proto__
// do not use it - MDN
// how to replace .__proto__ // ?
console.log('********* .__proto__')
function action1() {}
action1.prototype.hiFromAction1 = 'hi from action 1'
function action2() {}
action2.prototype.__proto__ = action1.prototype
console.log(new action2().hiFromAction1)


// Object.create
console.log('********* Object.create:')
const a = {a: 1}
const b = Object.create(a)
const o = Object.create(Object.prototype) // is equal to const o = {}
const o1 = Object.create(b, {o1Prop: {value:1, enumerable: true}})

console.log(o1) // ?
console.log(o1.__proto__) // ?
console.log(o1.__proto__.__proto__) // ?


// Object.assing
console.log('********* Object.assign:')
const obj1 = {a: 1}
const obj2 = {a: 2}
const obj3 = {b: 3}
const resultObj = Object.assign(obj1, obj2, obj3)
console.log(resultObj)
console.log(obj1) // assign changes the target


// Object.setProtoypeOf
// Performance issues
console.log('********* Object.setPrototypeOf:')
const targetObj = {a: 1}
const futureProtoObj = {b: 2}
const result = Object.setPrototypeOf(targetObj, futureProtoObj)
console.log(result)
console.log(result.b)
console.log(result.__proto__)
console.log(targetObj.__proto__)
