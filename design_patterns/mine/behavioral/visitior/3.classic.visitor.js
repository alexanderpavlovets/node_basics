
class NumberExpression {
  constructor(value) {
    this.value = value;
  }

  // Classic visitor allows to add this method. It is added only once for every class in hierarchy.
  accept(visitor) {
    // Only thing that visitor does - calling visit[InstanceName] on this
    visitor.visitNumber(this)
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  accept(visitor) {
    visitor.visitAddition(this)
  }
}

class Visitor {
  constructor() {
    this.buffer = []
  }

  // AKA Interface
  visitNumber(e) {}
  visitAddition(e) {}
}


// This approach is scalable, we can implemet ExpressionCalculator easily
class ExpressionPrinter extends Visitor {
  constructor() {
    super()
  }

  visitNumber(e) {
    this.buffer.push(e.value)
  }
  visitAddition(e) {
    this.buffer.push('(');
    e.left.accept(this)
    this.buffer.push('+');
    e.right.accept(this)
    this.buffer.push(')');
  }

  toString() {
    return this.buffer.join('')
  }
}

class ExpressionCalculator extends Visitor {
  constructor() {
    super()
    this.result = 0
  }

  visitNumber(e) {
    this.result = e.value
  }
  visitAddition(e) {
    e.left.accept(this)
    let temp = this.result
    e.right.accept(this)
    this.result += temp
  }
}

let expression = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(
    new NumberExpression(2),
    new NumberExpression(3)
  )
);


const expressionPrinter = new ExpressionPrinter();
expressionPrinter.visitAddition(expression)

console.log(expressionPrinter.toString())


const expressionCalculator = new ExpressionCalculator()
expressionCalculator.visitAddition(expression)

console.log(expression)


console.log(expressionCalculator.result)
