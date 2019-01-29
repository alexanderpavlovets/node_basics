
const x = Symbol()  // without "new" keyword

const y = Symbol('whatever decription - just for debugging, used as "name" of the Symbol')

const xx = Symbol('i am symbol')
const yy = Symbol('i am symbol')
console.log(xx, yy)    // Symbol(i am symbol) Symbol(i am symbol)
console.log(xx === yy) // false. Always === of two Symbols is false.


const obj = {
  id: 42,
  [x]: 'Computed property style to include Symbol into the object'
}

// SYMBOL is special data type, used to add meta property to an object. It's like "hidden" ... but only "like hidden"
const symb = Symbol('the description')
obj[symb] = 'This is a secret'
console.log(obj)                              // Will log the symbol y and it's value
console.log(Object.keys(obj))                 // Won't log the symbol y. Just [ 'id' ]
console.log(Object.getOwnPropertyNames(obj))  // Won't log the symbol y. Just [ 'id' ]
console.log(Object.getOwnPropertySymbols(obj))// [ Symbol(), Symbol(the description) ]
console.log(obj['Symbol(the description)'])   // undefined


console.log('___________Well known Symbols:')
console.log('These are META-extension hooks, seveal of them: ')

console.log(Symbol.iterator)            // Used to define behavior of iteractor of the object
console.log(Symbol.toStringTag)         // toString behavior
console.log(Symbol.toPrimitive)
console.log(Symbol.isConcatSpreadable)