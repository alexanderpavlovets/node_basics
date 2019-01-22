const key = {a: 1}
const value = 'i am a string'
const key1 = {a: 11}
const value1 = 'i am a string1'

const myMap = new Map()

myMap.set(key, value)
myMap.set(key1, value1)

console.log(myMap.get(key))
console.log(myMap.values())
console.log(Array.from(myMap))

console.log('_______________________')

const myMapCreatedWithNewAndParamenters = new Map([[1, 'value1'], [2, {a: 'value2'}]])
console.log(myMapCreatedWithNewAndParamenters.get(1))
console.log(Array.from(myMapCreatedWithNewAndParamenters.values()))

for( const a of myMapCreatedWithNewAndParamenters) {
  console.log(`Iteracting over ${a} and typeof a is ${typeof a}. More over it behaves like an Array - ${a[1]}`)
}

console.log('_______________________')

const mapWithEqualKeys = new Map([[1, 1],[1, 11], [1, 111]])
console.log(Array.from(mapWithEqualKeys.values()))
console.log(`Only 1 pair left here ${Array.from(mapWithEqualKeys)}`)

console.log('_______________________')

const justAMap = new Map([[1, 'first'], [2, 'second'], [3, 'third']])
console.log(justAMap.length) // nope - use size
console.log(justAMap.size)
console.log(justAMap.values())
console.log(justAMap.entries())
