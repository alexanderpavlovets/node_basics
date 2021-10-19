// "npm run ts-node .\ts_basics\3_generics.ts"


// Generics - kind of placeholers for type
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(['Alex', 'John'])

// numArray.push('') // err
numArray.push(123) // ok
