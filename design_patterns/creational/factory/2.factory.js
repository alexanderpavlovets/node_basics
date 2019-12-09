
// Factory is based on "separation of concerns" or SRP 
// Factory is just creating objects - that's it. The same method from factoryMethod are good

// Factory can use static method or regular methods (then initialization of factory is needed) if factory is containig some data

class Human {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class HumanFactory {
  constructor(skinColor) {
    this.skinColor = skinColor
  }

  static newWhiteHuman(name, age) {
    const human = new Human(name, age)
    human.skinColor = 'White'
    return human
  }

  static newBlackHuman(name, age) {
    const human = new Human(name, age)
    human.skinColor = 'Black'
    return human
  }

  newYellowHuman(name, age) {
    const human = new Human(name, age)
    human.skinColor = this.skinColor
    return human
  }  
}

const a = HumanFactory.newWhiteHuman('Alex', 29)
const b = HumanFactory.newBlackHuman('Vlad', 22)

// Here to show the initialization, if data storage is needed - parameter = data here
const c = new HumanFactory('Yellow').newYellowHuman('Den', 25) 

console.log(a)
console.log(b)
console.log(c)


// Another good approach - tell all the users, that you need to use factory, to instantiate an object

class Person {
  constructor(name) {
    this.name = name
  }

  static get factory() {
    return PersonFactory
  }
}

class PersonFactory {
  constructor() {}

  static newGreatPerson(name) {
    return new Person(name)
  }
}

const greatPerson = Person.factory.newGreatPerson('Person created via factiry getter')
console.log(greatPerson)


// Difference between Builder and Factory - complex parameterized build vs just creating the instance with several parameters.