
function *main() {
  console.log('Hello ')
  yield 9
  console.log('World ')
  // yield 10 - if so, {value: 10, done: false}
  return 10
}

main()            // won't run the code. Just construct an iteractor
const it = main() // you can use the iteractor to controll the generator

it.next() // {value: 9, done: false} because of the "yield" on string 4
it.next() // {value: 10, done: true}

for (const v of main()) { // will print "Hello 9 World", but without 10!, because {value: 10, done: true} - if done:true - generator consumers stop
  console.log(v)
}

// _______________________
console.log('___________________')
console.log('Generator is a state machine !')

function *gen() {
  for (let i = 0; i < 5; i++) {
    yield i
  }
}

for (const v of gen()) {
  console.log(v)
}


// _______________________
console.log('___________________')
console.log('Lazy sequence')

// Tis will work forever , and every time call .next - produce new value

function *uniqId() {
  while (true) {
    yield Math.floor(Math.random() * 100)
  }
}
const uniqNumber = uniqId()

console.log(uniqNumber.next().value)
console.log(uniqNumber.next().value)
console.log(uniqNumber.next().value)
console.log(uniqNumber.next().value)


// _______________________
console.log('___________________')
console.log('Own iterator with generators')

const obj = {
  *[Symbol.iterator]() { // consized computed generator. Generator that making iterator for object
    for (let i = this.start; i <= this.end; i++) {
      yield this.values[i]
    }
  },
  values: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
  start: 4,
  end: 13
}

const vals = [ ...obj ]
console.log(vals)


// _______________________
console.log('___________________')
console.log('Please read https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950')

// _______________________
console.log('___________________')
console.log('Yield* - combining the generators')

function* gen1(){
  yield 2
  yield 3
}
function* gen2(){
  yield 1
  yield* gen1()
  yield 4
}
const iter = gen2()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())