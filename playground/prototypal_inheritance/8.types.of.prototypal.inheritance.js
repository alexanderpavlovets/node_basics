
/*
 * OLOO:
 * 
 * Prototype delegation
 * Functional inheritance
 * Concatenative inheritance
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

// ______________ Functional inheritance ______________

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

// ______________ Concatenative inheritance ______________
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

// What oject IS - inheritance
// How object behaves - composition