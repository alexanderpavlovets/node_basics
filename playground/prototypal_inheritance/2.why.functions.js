class Human {
  constructor(sex) {
    this.sex = sex
  }

  walk() {
    console.log('i am walking')
  }
}

const man = new Human('man')
Human.prototype.prototypeProperty = 'i am in .prototype'
console.log(man)
console.log(man.prototypeProperty)

console.log(Human.prototype.hasOwnProperty('prototypeProperty'))
console.log(Human.prototype.hasOwnProperty('walk'))