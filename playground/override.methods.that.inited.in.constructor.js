class Parent {
  constructor() {
    const overridenBaseProps = Object.getOwnPropertyNames(Object.getPrototypeOf(this)).reduce((acc, cur) => {
      if (cur === 'property') {
        acc[cur] = this[cur]
      }
      return acc
    }, {})

    this.property = function() {
      console.log('I am from Parent constructor')
    }

    Object.assign(this, overridenBaseProps)
  }

  property() {
    console.log('I am from Parent as method')
  }
}

class Child extends Parent{
  constructor() {
    super()
  }

  property() {
    console.log('I am from Child as method')
  }
}

const baseClass = new Parent()
const childClass = new Child()

baseClass.property()
childClass.property()