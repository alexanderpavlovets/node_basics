
console.log('*********** Objects:')

const Human = {sex: 'man'}
console.log(Human.prototype) // ?
console.log(Human.__proto__) // ?


const Human1 = new Object({a: 1})
console.log(Human1.prototype) // ?
console.log(Human1.__proto__) // ? 


// ______
console.log('*********** Functions:')

function HumanFunc() {return 1}
console.log(HumanFunc.prototype) // ?
console.log(HumanFunc.__proto__) // ? 


const HumanFunc1 = new Function('return 1')
console.log(HumanFunc1.prototype) // ?
console.log(HumanFunc1.__proto__) // ? 


// ______
console.log('*********** Arrays:')
const Humans = []
console.log(Humans.prototype) // ? 
console.log(Humans.__proto__) // ? 

const Humans1 = new Array(0)
console.log(Humans1.prototype) // ?
console.log(Humans1.__proto__) // ? 


// ______
console.log('*********** Number:')
console.log(Number.prototype)
console.log(Number.__proto__)


console.log('*********** Magic:')
// console.log(Object.__proto__ === Array.__proto__)    // ?
// console.log(Object.__proto__ === Function.__proto__) // ?
// console.log(Number.__proto__ === Function.__proto__) // ?
// console.log(Object.constructor === Function) // ?
// console.log(Number.constructor === Function) // ?
