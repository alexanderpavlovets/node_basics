const firstObject = {
  firstProperty: 1,
  secondProperty: 2
}

const {
  firstProperty, // just property
  secondProperty: renamedSecondOne, // renamed property
  nonExistingPropertyForDefault = 42, // default value. There is no such property in obj
  undefinedProp,

} = firstObject || {} // "{}" in case if falsy is returned

console.log(
  firstProperty,
  renamedSecondOne,
  nonExistingPropertyForDefault,
  undefinedProp
)

console.log('_______________________')
// __________________________

const nestedObj = {
  a: 1,
  b: {
    nestedA: 11,
    nestedB: 22
  }
}

const {
  a,
  b: {
    nestedA, nestedB
  } = {} // provide default value in case there is no b. Because attempt to destr undefined is Exception
} = nestedObj
console.log(nestedA, nestedB)

console.log('_______________________')
// __________________________

function abc({a, b = 10, c} = {}) { // again = {} is for safety 
  console.log(a, b, c)
}

abc({c: 3, a: 1}) // order is not important here