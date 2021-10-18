
// Basic example of Visitor pattern.with "reflection" approach
// Visitor goal - to extend functionality, without modifying the class itself

class GrebetsJun {
  constructor(name) {
    this.name = name
    this.title = 'Junior'
  }

  accept(visitor) {
    visitor.visitGrebets(this)
  }
}

class GrebetsMid {
  constructor(name) {
    this.name = name
    this.title = 'Middle'
  }

  accept(visitor) {
    visitor.visitGrebets(this)
  }
}

class GrebetsSen {
  constructor(name) {
    this.name = name
    this.title = 'Senior'
  }

  accept(visitor) {
    visitor.visitGrebets(this)
  }
}

class VisitorZloyLead {
  constructor() {}

  visitGrebets(grebets) {
    switch (grebets.title) {
      case 'Junior':
        console.log('Hey, prestroyka - write several console.logs')
        break;
      case 'Middle':
        console.log(`Hey ti, kak tam tebya ... ${grebets.name} - tvoy kod govno`)
        break;
      case 'Senior':
        console.log(`Hi, ${grebets.name}, kak tam UI frame`)
        break
    }
  }
}

const Vlad = new GrebetsJun('Vlad')
const Denis = new GrebetsMid('Denis')
const Ded = new GrebetsSen('Ded')

const zloyLead = new VisitorZloyLead()

Vlad.accept(zloyLead)
Denis.accept(zloyLead)
Ded.accept(zloyLead)
