
// literally adding .prototype
console.log('********* .prototype')
function action() {}
action.prototype.propPrototype = 'property in .prototype'

const actionInstance = new action()
actionInstance.propInstance = 'property in instance'

console.log(actionInstance.propInstance)
console.log(actionInstance.propPrototype)

// literally adding .__proto__
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


// do not forget utils.inherit - show an example 

// add example from your favorite article about interview - inheritance y reference