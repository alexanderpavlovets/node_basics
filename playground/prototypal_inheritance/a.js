function f () {

}

function c () {

}

console.log(f.__proto__.constructor.__proto__)
console.log(f.prototype)
console.log(c.__proto__)
console.log(f.__proto__ === c.__proto__)
console.log('******')
console.log(f.__proto__.__proto__)
console.log(f.__proto__.constructor.__proto__.__proto__)


const a = {}
console.log(a.__proto__ === f.__proto__.__proto__)
console.log(a.__proto__ === f.__proto__.constructor.__proto__.__proto__)

console.log(f.__proto__ === f.__proto__.constructor.__proto__)

console.log('************1231231231')
console.log(Function.__proto__ === Function.prototype)
console.log(f.__proto__.constructor.__proto__ === f.__proto__.constructor.prototype)


console.log(Object.keys(f.__proto__))

console.log('************')

const asd = {}
asd.__proto__ = {mineKey: 'myValue'}

Function.call(asd)

console.log(asd.__proto__)