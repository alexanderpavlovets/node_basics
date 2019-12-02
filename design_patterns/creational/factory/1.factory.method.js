
// Factory - a componentt responsible solely for the wholesale (not piecewise as builder) creation of objects

/* Issue: 
  When we have a class "Person" responsible for creating man and women
  We need to pass a "gender" as parameter, and store Genders enum + add switch/case for some logic.
  OR
  We can use factory method
*/

const Genders = {
  man : 1,
  woman: 2
}

class Person {
  clothes = null

  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    switch (this.gender) {
      case 1:
        this.clothes = 'Suite'
      break

      case 2:
        this.clothes = 'Dress'
    }
  }
}

const man = new Person('Alex', 29, Genders.man)
const woman = new Person('Denis', 70, Genders.woman)
console.log(man)  // clothes is Suite
console.log(woman)// clothes is Dress


// Or the Factory method - more descriptive name and parameters names, and avoiding undesirable parameters: 

class PersonWithFactoryMethod {
  constructor(name, age, gender, clothes) {
    this.name = name
    this.age = age
    this.gender = gender
    this.clothes = clothes
  }

  static newMan(name, age) {
    return new PersonWithFactoryMethod(name, age, 'man', 'Suite')
  }

  static newWoman(name, age) {
    return new PersonWithFactoryMethod(name, age, 'woman', 'Dress') 
  }
}

const man2 = PersonWithFactoryMethod.newMan('Alex', 25)
const woman2 = PersonWithFactoryMethod.newWoman('Vlad', 20)
console.log(man2)
console.log(woman2)