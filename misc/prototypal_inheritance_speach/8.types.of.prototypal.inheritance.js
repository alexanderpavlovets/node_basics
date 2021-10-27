
/*
 * OLOO:
 * 
 * Prototype delegation
 * Prototype delegation - Functional inheritance
 * Concatenation
 * Aggregation
*/

// ______________ Prototype delegation ______________

const human = {
  age: 0,
  walk() {console.log('I am walking')}
}

const student = Object.assign(Object.create(human), {
  age: 17,
  favouriteLecture: 'Math'
})

student.walk()

// ______________ Prototype delegation - Functional inheritance ______________

const person = {
  name: '',
  age: 0,
  tellMeAboutYourself() {console.log(`I am ${this.name}, and i am ${this.age} year(s) old`)}
}

function femaleFactory({name = 'girl without name'}) {
  return Object.assign(Object.create(person), {
    name,
    age: 30,
    favouriteColor: 'Blue'
  })
}

const masha = femaleFactory({name: 'Masha'})
const dasha = femaleFactory({name: 'Dasha'})

masha.tellMeAboutYourself()
dasha.tellMeAboutYourself()

// ______________ Concatenation ______________
const individual = {
  name: '',
  age: 0
}
const runner = {
  run() {console.log('i am running')}
}
const swimmer = {
  swim() {console.log('i am swimming')}
}
const flyer = {
  fly() {console.log('i am flying')}
}
const shooter = {
  shoot() {console.log('pif-paf')}
}

const jamesBond = Object.assign({}, individual, runner, swimmer, flyer, shooter)

jamesBond.run()
jamesBond.shoot()

// What oject IS-A - inheritance
// What object HAS-A - composition

// ______________ Aggregation ______________
const objects = [{name: 'a'}, {name: 'b'}, {name: 'c', secondName: 'secondC'}]

const myAggregation = {
  first: objects[0],
  second: objects[1],
  third: objects[2]
}

const myConcatenaion = {
  ...objects[0],
  ...objects[1],
  ...objects[2],
}

const aggregationSimpliesExample = [1,2,3]
