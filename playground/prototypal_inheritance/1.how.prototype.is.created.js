function Human(sex) {
  this.sex = sex
}

const man = new Human('man')

console.log(man)

Human.prototype.prototypeProperty = 'i am in .prototype'
Human.prototype.walk = function() {
  console.log('i am walking')
}

console.log('Not changed object itself:')
console.log(man)

console.log('Properties in .prototype:')
console.log(man.__proto__)
