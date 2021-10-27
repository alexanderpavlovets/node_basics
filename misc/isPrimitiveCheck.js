
const isArgumentPrimitive = (arg) => (arg !== Object(arg))

console.log(isArgumentPrimitive(123))       // true 
console.log(isArgumentPrimitive('123'))     // true 
console.log(isArgumentPrimitive(null))      // true 
console.log(isArgumentPrimitive(undefined)) // true 
console.log(isArgumentPrimitive({}))        // false 
console.log(isArgumentPrimitive([]))        // false 
console.log(isArgumentPrimitive(true))      // true 
console.log(isArgumentPrimitive(false))     // true