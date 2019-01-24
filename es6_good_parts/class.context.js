class Person {
  constructor() {
    this.a = 123
    this.b = 222
  }

  method2() {
    return {
      closure1: function a() {console.log(this.a)}.bind(this),
      closure2: function a() {console.log(this.a)},
      closure3: function() {console.log(this.a)},
      closure4: () => console.log(this.a)
    }
  }
  method1() {
    return this.a
  }
}

const pers = new Person()
pers.method2().closure1()
pers.method2().closure2()
pers.method2().closure3()
pers.method2().closure4()

class Dev {
  constructor() {
    this.a = 'I am Dev'
  }
}

const dev = new Dev()
pers.method2().closure1.call(dev) // this "call" WON'T overrite befault bind on string 9
pers.method2().closure2.call(dev)
