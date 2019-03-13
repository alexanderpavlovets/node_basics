class BaseOne {
  constructor() {
    this.property = function() {
      console.log('I am from BaseOne constructor')
    }
  }

  property() {
    console.log('I am from BaseOne as method')
  }
}

class Child extends BaseOne{
  constructor() {
    super()
    this.property = function() {
      console.log('I am from Child constructor')
    }
  }

  property() {
    console.log('I am from Child as method')
  }
}

const baseClass = new BaseOne()
const childClass = new Child()

baseClass.property()
childClass.property()