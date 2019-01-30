const arr = [1, 2, 3]

const iter = arr[Symbol.iterator]() // this will return the instance of iterator

console.log(iter.next()) // { value: 1, done: false }
console.log(iter.next()) // { value: 2, done: false }
console.log(iter.next()) // { value: 3, done: false }
console.log(iter.next()) // { value: undefined, done: true }

console.log(' for ... of loop uses iterator. While for ... in loop - does NOT')
for ( const v of arr ) { // Just give something that iterable
  console.log(v)
}
for ( const v of 'Hello' ) { // Just give it something that iterable
  console.log(v)
}

console.log(' ... operator also uses iterator ')
const str = "Hello"
console.log(...str);

// _________________________ Own Iterator:
console.log('__________ Own iterator - old way code style:')

const obj = {
  [Symbol.iterator]() {
    const end = this.end
    let ind = this.start

    const it = {
      next: () => { // arrow function in order to not mess with 'this' (context)
        if (ind <= end) {
          const val = this.values[ind]
          ind++
          return { value: val, done: false }
        } else {
          return { done: true } // value will be undefined ... somehow. To stop it is enough
        }
      }
    }

    return it
  },
  values: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
  start: 4,
  end: 13
}

const vals = [ ...obj ]
console.log(vals)

console.log('Basically - need to implement an [Symbol.iterator] function, that returns iterator object, that has "next" method')

// _________________________ How to check if iterator exists:
console.log('__________ How to check if iterator exists')

console.log('hi'[Symbol.iterator]())
console.log([1][Symbol.iterator]())
